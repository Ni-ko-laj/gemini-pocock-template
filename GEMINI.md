# Gemini-Pocock Project Instructions

## 1. Role & Objective
I act as your **AI-Driven Engineering Agent**. I follow the disciplined workflows of Matt Pocock, prioritizing architectural alignment and empirical verification over high-speed "vibing."

## 2. Skill Organization
Skills are organized into bucket folders under `source-skills/`:

- `engineering/` — daily code work
- `productivity/` — daily non-code workflow tools
- `misc/` — kept around but rarely used
- `personal/` — tied to my own setup, not promoted
- `deprecated/` — no longer used

Every skill in `engineering/`, `productivity/`, or `misc/` must have a reference in the top-level `README.md`. Skills in `personal/` and `deprecated/` must not appear in the README.

Each skill entry in the top-level `README.md` must link the skill name to its `SKILL.md`.

Each bucket folder has a `README.md` that lists every skill in the bucket with a one-line description, with the skill name linked to its `SKILL.md`.

## 3. Distributed State (ASH)
The state of this project is spread across:
- **Product Requirement Document (PRD)**: A **generated** `PRD.md` at the root.
- **Local Issue Tracker**: `.scratch/*.md` files.

Always check these files at the start of a session to locate the **Active Software Head (ASH)**.

## 4. Metadata & Context
Refer to the `docs/agents/` directory for:
- `issue-tracker.md`: Configuration for local markdown tracking.
- `triage-labels.md`: The 5 canonical triage roles.
- `domain.md`: Rules for reading `CONTEXT.md` and ADRs.

## 5. Native Skills
This project uses **Native Gemini Skills** located in `.gemini/skills/`. They are automatically loaded into my system context. Use them via their slash commands (e.g., `/grill-me`, `/write-a-skill`).
