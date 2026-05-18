---
name: grill-me
description: Interview the user relentlessly about a plan or design until reaching shared understanding, resolving each branch of the decision tree. Use when user wants to stress-test a plan, get grilled on their design, or mentions "grill me".
---

# Grill Me

Interview me relentlessly about every aspect of this plan until we reach a shared understanding. Walk down each branch of the design tree, resolving dependencies between decisions one-by-one. 

## 🤖 Gemini-Native Protocols

As a Gemini CLI agent, you have an "Empirical Advantage." Follow these protocols during the grill:

1.  **Codebase First, User Second**: Before asking a question about technical impact (e.g., "How does this affect the Auth module?"), use `grep_search` or `glob` to find the relevant code. Only ask the user if the codebase does not provide the answer.
2.  **Metadata Alignment**: Check `docs/agents/` to ensure your proposed design branches are compatible with the project's issue tracker and triage labels.
3.  **Instructional Rigor**: For each question, provide your **recommended answer** based on the current codebase state and Matt Pocock's engineering principles.

## Workflow

1.  **Identify the Branches**: Map out the decision tree of the proposed plan.
2.  **Resolve Dependencies**: Walk down one branch at a time. Do not move to the next branch until the current one is resolved.
3.  **Ask One at a Time**: Ask your questions one by one to avoid overwhelming the user.
4.  **Confirm Alignment**: At the end of the grill, summarize the shared understanding and identify the next vertical slice (Tracer Bullet).
