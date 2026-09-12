#!/usr/bin/env node
// UserPromptSubmit hook: when the incoming prompt begins with an
// [AICC]...[/AICC] header, records the browser-chat handoff through the AI
// Control Centre CLI *before* the coding agent proceeds -- see CLAUDE.md's
// "AI Control Centre tracking" section, item 9, and
// C:\Work\tools\ai-control-centre\AI_WORKFLOW.md's "Recording a
// coding-prompt handoff (AICC header)".
//
// Deliberately does nothing for prompts without an [AICC] header (the
// common case), and never blocks the prompt from proceeding -- this always
// exits 0 regardless of outcome. Duplicate protection is NOT implemented
// here: the AICC CLI's own `handoff record` already dedups via a stable
// fingerprint of project + provider + model + effort + session type + the
// prompt text itself (see AI_WORKFLOW.md), so re-running this hook against
// the same prompt (a retry, a resumed session) is a safe no-op there, not
// something this script needs to guard against separately.

import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

// Override with the AICC_REPO_DIR env var if the AI Control Centre repo
// ever moves; this is the one place its location is assumed.
const AICC_REPO_DIR = process.env.AICC_REPO_DIR || 'C:\\Work\\tools\\ai-control-centre';

function readStdin() {
  try {
    return readFileSync(0, 'utf8');
  } catch {
    return '';
  }
}

function main() {
  let payload;
  try {
    payload = JSON.parse(readStdin());
  } catch {
    // Malformed/empty input -- never block the prompt over this.
    return;
  }

  const prompt = typeof payload.prompt === 'string' ? payload.prompt : '';
  if (!prompt.trimStart().startsWith('[AICC]')) {
    // The overwhelmingly common case: no header, nothing to do.
    return;
  }

  const projectDir = typeof payload.cwd === 'string' && payload.cwd
    ? payload.cwd
    : process.cwd();

  try {
    // shell:true is required on Windows to resolve npm.cmd (spawning it
    // directly throws EINVAL on this Node/Windows combination even when
    // pointed at npm.cmd explicitly). projectDir is our own trusted
    // payload.cwd, not attacker-controlled input, so the shell-injection
    // risk this normally warns about doesn't apply here.
    const result = spawnSync(
      'npm',
      ['run', 'aicc', '--', 'handoff', 'record', '--project', projectDir, '--stdin'],
      {
        cwd: AICC_REPO_DIR,
        input: prompt,
        encoding: 'utf8',
        shell: process.platform === 'win32',
        timeout: 15000,
      },
    );
    if (result.error) {
      console.error(`[aicc-handoff] failed to run: ${result.error.message}`);
    } else if (result.status !== 0) {
      console.error(`[aicc-handoff] handoff record exited ${result.status}: ${result.stderr || result.stdout}`);
    }
  } catch (err) {
    // Never let a recording failure block or disrupt the actual prompt.
    console.error(`[aicc-handoff] unexpected error: ${err instanceof Error ? err.message : String(err)}`);
  }
}

main();
