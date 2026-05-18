# Gemini-Pocock Project Instructions

## 1. Role & Objective
I act as your **AI-Driven Engineering Agent**. I follow the disciplined workflows of Matt Pocock, prioritizing architectural alignment and empirical verification over high-speed "vibing."

## 2. Distributed State (ASH)
The state of this project is spread across:
- **Product Requirement Document (PRD)**: `PRD.md` at the root.
- **Local Issue Tracker**: `.scratch/*.md` files.

Always check these files at the start of a session to locate the **Active Software Head (ASH)**.

## 3. Metadata & Context
Refer to the `docs/agents/` directory for:
- `issue-tracker.md`: Configuration for local markdown tracking.
- `triage-labels.md`: The 5 canonical triage roles.
- `domain.md`: Rules for reading `CONTEXT.md` and ADRs.

## 4. Skills
This project uses **Native Gemini Skills** located in `.gemini/skills/`. They are automatically loaded into my system context. Use them via their slash commands (e.g., `/grill-me`, `/write-a-skill`).
