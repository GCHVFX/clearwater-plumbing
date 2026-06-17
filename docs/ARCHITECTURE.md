\# Clearwater Plumbing Architecture



\## Purpose



Clearwater Plumbing is a demonstration contractor website used to:



1\. Sell website subscriptions to contractors.

2\. Validate website-to-TradePulse integration workflows.

3\. Serve as a production-quality plumbing website that could be deployed to a real contractor.



The website must be good enough that a real contractor would be willing to use it without major redesign.



\---



\# Core Business Goal



The website is not primarily a brochure website.



The website exists to generate qualified quote requests and feed them into TradePulse.



The primary conversion action is:



Get A Quote



The secondary conversion action is:



Call Now



\---



\# Core Concept



The site is built around:



"Show us the problem."



Instead of generic contact forms, visitors should be encouraged to:



\* Describe the issue

\* Upload photos

\* Explain urgency

\* Submit a quote request



The goal is to gather enough information that the contractor can prepare an estimate before making contact.



\---



\# User Journey



\## Visitor



1\. Lands on website.

2\. Understands services and trust signals.

3\. Starts quote request.

4\. Uploads photos.

5\. Submits request.



\---



\## TradePulse



1\. Receives quote request.

2\. Stores lead.

3\. Stores uploaded photos.

4\. Performs AI photo analysis.

5\. Generates job summary.

6\. Generates draft estimate.

7\. Places estimate into approval queue.



\---



\## Contractor



1\. Receives notification.

2\. Reviews lead.

3\. Reviews AI analysis.

4\. Reviews estimate draft.

5\. Edits if required.

6\. Approves estimate.

7\. Sends estimate to customer.



\---



\## Customer



1\. Receives approved estimate.

2\. Accepts or declines.

3\. Receives follow-ups if configured.

4\. Receives review request after completed job.



\---



\# Website Structure



\## Home



Primary conversion page.



Focus:



\* Trust

\* Problem solving

\* Quote requests



Avoid:



\* Generic marketing language

\* Fake urgency

\* Fake reviews



\---



\## Services



Detailed service descriptions.



Focus on:



\* Customer problems

\* Common symptoms

\* Expected process



Not feature lists.



\---



\## About



Build trust.



Focus on:



\* Company values

\* Experience

\* Professionalism



Avoid corporate language.



\---



\## Gallery



Real work examples.



Prefer:



\* Before and after photos

\* Project descriptions



Avoid stock photography.



\---



\## Contact



Simple contact information.



Include:



\* Phone

\* Email

\* Service area

\* Quote request entry point



\---



\# Quote Request System



The quote request system is the most important feature on the site.



The quote request should gather:



\* Name

\* Phone

\* Email

\* Address

\* Service type

\* Problem location

\* Urgency

\* Description

\* Up to 5 photos



\---



\# TradePulse Integration



The website should integrate directly with TradePulse.



Submission flow:



Website Form

→ TradePulse Lead

→ AI Analysis

→ Draft Estimate

→ Contractor Approval

→ Customer Estimate



Customers should never receive AI-generated estimates automatically.



All estimates require contractor approval before delivery.



\---



\# Design Philosophy



Avoid:



\* Template appearance

\* Excessive statistics

\* Generic contractor websites

\* Fake reviews

\* Large blocks of marketing copy



Prefer:



\* Strong visual hierarchy

\* Clear calls to action

\* Real photography

\* Trust signals

\* Fast quote requests

\* Mobile-first design



The website should feel modern, professional, and useful rather than sales-focused.



\---



\# Technical Stack



\* Next.js App Router

\* TypeScript

\* Tailwind v4

\* Vercel deployment



Follow all project-specific constraints defined in CLAUDE.md.



\---



\# Success Metric



The site is successful if:



1\. A homeowner feels comfortable requesting a quote.

2\. A contractor would be willing to pay for the website.

3\. The website generates qualified quote requests.

4\. TradePulse receives sufficient information to create useful estimate drafts.



