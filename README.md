# Gemini-Pocock: AI-Driven Engineering for Gemini CLI

This is a port of [Matt Pocock's "Skills" framework](https://github.com/mattpocock/skills) and "AI-Driven Engineering" workflow, optimized natively for the **Gemini CLI**.

## 🚀 The Core Philosophy

"Vibe Coding" is for demos; **AI-Driven Engineering** is for production. This template transforms the Gemini CLI from a chat assistant into a disciplined engineer by enforcing:

1.  **Alignment First**: Use `/grill-me` to stress-test designs before a single line of code is written.
2.  **Shared Language**: A `CONTEXT.md` file defines your project's domain to prevent token bloat and terminology drift.
3.  **Empirical Proof**: Guided TDD loops (Red-Green-Refactor) ensure code correctness.
4.  **Distributed State**: The "Active Software Head" (ASH) is tracked via a `PRD.md` and a local `.scratch/` issue tracker.

## 🛠 Project Structure

- `.gemini/skills/`: **The Discovery Tier.** Flat symlinks that allow the Gemini CLI to auto-discover skills.
- `source-skills/`: **The Source.** A nested, organized hierarchy of your skills.
- `docs/agents/`: **Metadata.** Configurations for issue trackers, triage labels, and domain layouts.
- `.scratch/`: **Issue Tracker.** Local Markdown files for task tracking.
- `scripts/sync-skills.cjs`: **The Engine.** Validates unique skill names and flattens the source into symlinks.

## 🚦 Getting Started

1.  **Clone the template**:
    ```bash
    git clone https://github.com/Ni-ko-laj/gemini-pocock-template.git my-new-project
    cd my-new-project
    ```
2.  **Bootstrap**:
    ```bash
    ./bootstrap.sh
    ```
    This script initializes the directory structure and creates the necessary symlinks in `.gemini/skills/`.

3.  **Start Coding**:
    Launch the Gemini CLI. The skills will be automatically listed in your `<available_skills>` prompt.

## 🧙 Available Skills

- `/grill-me`: Relentless Socratic interrogation of your plans.
- `/write-a-skill`: Automated workflow to create and sync new skills.

## 🏗 Extending the Port

To add a new skill:
1. Create a folder in `source-skills/`.
2. Add a `SKILL.md` with YAML frontmatter (name, description).
3. Run `node scripts/sync-skills.cjs` to register it.
4. (Or just use the `/write-a-skill` meta-skill!)

---
*Inspired by Matt Pocock. Ported to Gemini CLI by dj_im.*
