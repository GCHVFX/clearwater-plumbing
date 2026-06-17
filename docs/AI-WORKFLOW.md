\# AI Workflow



This document defines how AI tools are used across all projects.



Projects include, but are not limited to:



\* TradePulse

\* RouteBuddy

\* AddressBuddy

\* Contractor websites

\* Internal tools

\* Future software products



\---



\# Roles



\## ChatGPT



ChatGPT is the product planner, strategist, and specification writer.



Use ChatGPT for:



\* Product planning

\* Feature design

\* Business strategy

\* Pricing decisions

\* UX planning

\* Workflow design

\* Technical specifications

\* Requirement definition

\* Architecture discussion

\* Prioritization decisions

\* Reviewing recommendations from other AI tools



ChatGPT should generally be used before implementation begins.



\---



\## Claude Code



Claude Code is the primary implementation agent.



Use Claude Code for:



\* New features

\* UI development

\* Website development

\* API development

\* Database implementation

\* Refactors

\* Bug fixes

\* Documentation updates

\* TradePulse development

\* RouteBuddy development

\* AddressBuddy development

\* Executing approved specifications



Claude Code should generally receive a complete specification before implementation starts.



Claude Code is responsible for building.



\---



\## Codex



Codex is the reviewer and auditor.



Use Codex for:



\* Architecture review

\* Security review

\* Bug detection

\* Edge-case analysis

\* Performance review

\* Requirement compliance review

\* Deployment readiness review

\* Pull request review

\* Diff review



Codex is responsible for reviewing.



Codex should generally not be the primary implementation agent unless explicitly requested.



\---



\# Standard Workflow



For most development work:



1\. Define requirements.

2\. Create specification.

3\. Claude Code implements.

4\. Codex reviews.

5\. Claude Code fixes findings.

6\. Codex validates final result.



Avoid having Claude Code and Codex edit the same files simultaneously.



\---



\# When To Use Claude Code



Use Claude Code when:



\* Building a new feature

\* Creating a page

\* Creating a website

\* Connecting systems together

\* Implementing a specification

\* Modifying UI

\* Refactoring code

\* Updating project structure

\* Adding functionality



Typical prompts:



\* Implement this specification.

\* Build this feature.

\* Create this page.

\* Refactor this component.

\* Add this workflow.

\* Connect these systems.



\---



\# When To Use Codex



Use Codex when:



\* Reviewing completed work

\* Auditing implementation quality

\* Searching for bugs

\* Searching for security issues

\* Checking architecture decisions

\* Reviewing pull requests

\* Reviewing diffs

\* Verifying specification compliance

\* Determining production readiness



Typical prompts:



\* Review this implementation against the specification.

\* Find bugs and edge cases.

\* Audit this feature.

\* Review security concerns.

\* Review architecture.

\* Is this production ready?

\* What did Claude Code miss?



\---



\# Required Codex Reviews



A Codex review is strongly recommended after:



\* Authentication changes

\* Authorization changes

\* Database schema changes

\* Payment system changes

\* File upload systems

\* OCR systems

\* AI integrations

\* External API integrations

\* Major refactors

\* Production deployment preparation



\---



\# Review Output Format



When reviewing work, Codex should categorize findings as:



\## Critical



Production-breaking issues.



\## High



Incorrect functionality, data loss risk, major UX issues, or security concerns.



\## Medium



Important improvements that should be addressed.



\## Low



Nice-to-have improvements.



\---



\# Implementation Philosophy



Prefer:



\* Simple solutions

\* Maintainable code

\* Clear architecture

\* Explicit requirements

\* Incremental changes

\* Reusable components



Avoid:



\* Unnecessary complexity

\* Premature optimization

\* Large rewrites without justification

\* Feature creep

\* Hidden assumptions



\---



\# Default Decision Rule



If uncertain:



1\. Ask ChatGPT to help define the solution.

2\. Use Claude Code to build it.

3\. Use Codex to review it.

4\. Use Claude Code to apply fixes.

5\. Use Codex for final validation.



Default pattern:



ChatGPT → Specification → Claude Code → Codex Review → Claude Code Fixes → Codex Validation



