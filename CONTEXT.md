# Context: Gemini-Pocock Template

This document defines the ubiquitous language for the Gemini-Pocock framework and the core AI-Driven Engineering methodology.

## 🏗 Core Engineering Philosophy (Matt Pocock)

These terms represent the foundational methodology that governs our work:

- **Tracer Bullets**: Thin vertical slices of functionality that cut through all layers of the system (DB, API, UI) to prove a path. We build these first to ensure architectural alignment.
- **Deep Modules**: Components that encapsulate complex logic behind a simple, stable interface. We prefer deep modules over shallow ones to reduce system complexity.
- **Red-Green-Refactor**: The strict TDD loop. Write a failing test (**Red**), write minimum code to pass (**Green**), then clean the code (**Refactor**).
- **The Dumb Zone**: The state where an LLM is given a task that is too large or vague, causing it to hallucinate or write poor code. We avoid this by providing high-quality context and narrow tasks.
- **Agentic Rigor**: The discipline of forcing the agent into structured engineering loops (TDD, Grilling, PRD) rather than accepting high-speed "vibes."

## 📚 Language (Terminology Fidelity)

To maintain absolute alignment with the upstream system, we use these precise definitions:

- **Issue tracker**: The tool that hosts a repo's issues — GitHub Issues, Linear, a local `.scratch/` markdown convention, or similar. Skills like `to-issues`, `to-prd`, `triage`, and `qa` read from and write to it. (_Avoid_: backlog manager, backlog backend, issue host)
- **Issue**: A single tracked unit of work inside an **Issue tracker** — a bug, task, PRD, or slice produced by `to-issues`. (_Avoid_: ticket)
- **Triage role**: A canonical state-machine label applied to an **Issue** during triage (e.g. `needs-triage`, `ready-for-afk`). Each role maps to a real label string in the **Issue tracker** via `docs/agents/triage-labels.md`.

### Relationships
- An **Issue tracker** holds many **Issues**.
- An **Issue** carries one **Triage role** at a time.

### Flagged ambiguities
- **"backlog"**: previously used to mean both the *tool* hosting issues and the *body of work* inside it. **Resolved**: the tool is the **Issue tracker**; "backlog" is no longer used as a domain term.
- **"backlog backend" / "backlog manager"**: **Resolved**: collapsed into **Issue tracker**.

## 🤖 Gemini-Native Implementation

These terms define the specific architecture of this port:

- **ASH (Active Software Head)**: The specific, narrow task or vertical slice currently being worked on. It is tracked in the generated `PRD.md` and `.scratch/` issues.
- **The Engine**: The `scripts/sync-skills.cjs` Node.js script that flattens nested source skills into the native Gemini discovery tier.
- **Discovery Tier**: The `.gemini/skills/` directory where the Gemini CLI automatically looks for skill instructions.
- **Source of Truth**: The `source-skills/` directory, containing the version-controlled, categorized skill folders.
- **Grilling**: The Socratic process of alignment before execution, typically resulting in a PRD.
- **Sync-Link**: The process of using the Engine to keep the Discovery Tier in sync with the Source of Truth.
- **Local Markdown Tracker**: The practice of using `.scratch/` for issue tracking to ensure project portability and offline capability.
