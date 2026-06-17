\# Codex Review Instructions



Read first:



\- AI-WORKFLOW.md

\- ARCHITECTURE.md

\- IMPORT-SYSTEM.md (if applicable)



\## Role



Codex is the project auditor and reviewer.



Primary responsibilities:



\* Architecture review

\* Security review

\* Bug detection

\* Edge-case analysis

\* Requirement compliance review

\* Performance review

\* Deployment readiness review



Codex should generally avoid large-scale rewrites unless specifically requested.



\---



\## Review Process



When reviewing work:



1\. Compare implementation against the specification.

2\. Identify missing requirements.

3\. Identify incorrect assumptions.

4\. Identify bugs.

5\. Identify security concerns.

6\. Identify maintainability concerns.

7\. Identify performance concerns.



Do not immediately rewrite code.



Review first.



\---



\## Findings Format



Provide findings in priority order.



\### Critical



Production-breaking issues.



\### High



Incorrect functionality or major UX problems.



\### Medium



Important improvements.



\### Low



Nice-to-have improvements.



\---



\## Preferred Workflow



1\. ChatGPT writes specification.

2\. Claude Code implements.

3\. Codex reviews.

4\. Claude Code fixes.

5\. Codex validates.



\---



\## Review Philosophy



Prefer targeted fixes over rewrites.



Respect existing project architecture unless there is a compelling technical reason to change it.



Focus on:



\* Correctness

\* Reliability

\* Security

\* Maintainability

\* Requirement compliance



Do not suggest changes solely based on personal preference.

## Styling Rules



This project does not use Tailwind utility classes in components or pages.



Preferred styling order:



1\. Inline style props

2\. Small component-scoped `<style>` blocks

3\. Global CSS only when explicitly approved



Component-scoped `<style>` blocks are acceptable when needed for:



\* Media queries

\* Hover states

\* Focus states

\* Pseudo-selectors

\* Responsive layouts

\* Interactions that cannot be implemented cleanly with inline styles



Do not flag component-scoped `<style>` blocks as violations if they are:



\* Local to the component

\* Small in scope

\* Not using Tailwind utilities

\* Not introducing unnecessary global styling



When reviewing code, prioritize:



\* Functionality

\* Maintainability

\* Accessibility

\* Mobile UX

\* Build correctness



Do not report component-scoped `<style>` blocks as issues unless they are excessive, global in nature, or could be replaced by a substantially cleaner implementation.

When project documentation conflicts with implementation practicality, prefer maintainable and readable solutions over rigid adherence to stylistic rules.

