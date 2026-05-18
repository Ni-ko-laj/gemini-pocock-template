# Gemini-Pocock: AI-Driven Engineering for Gemini CLI

<p>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://res.cloudinary.com/total-typescript/image/upload/v1777382277/skills-repo-dark_2x.png">
    <source media="(prefers-color-scheme: light)" srcset="https://res.cloudinary.com/total-typescript/image/upload/v1777382277/skill-repo-light_2x.png">
    <img alt="Skills" src="https://res.cloudinary.com/total-typescript/image/upload/v1777382277/skill-repo-light_2x.png" width="369">
  </picture>
</p>

This is a native port of [Matt Pocock's "Skills" framework](https://github.com/mattpocock/skills) and "AI-Driven Engineering" workflow, optimized natively for the **Gemini CLI**.

## 🚀 The Core Philosophy

"Vibe Coding" is for demos; **AI-Driven Engineering** is for production. This template transforms the Gemini CLI from a chat assistant into a disciplined engineer by enforcing:

1.  **Alignment First**: Use `/grill-me` to stress-test designs before a single line of code is written.
2.  **Shared Language**: A `CONTEXT.md` file defines your project's domain to prevent token bloat and terminology drift.
3.  **Empirical Proof**: Guided TDD loops (Red-Green-Refactor) ensure code correctness.
4.  **Distributed State**: The "Active Software Head" (ASH) is tracked via a **generated** `PRD.md` and a local `.scratch/` issue tracker.

## 🛠 Why These Skills Exist

We built this port to fix common failure modes seen in coding agents.

### #1: The Agent Didn't Do What I Want
The most common failure mode in software development is misalignment. The fix is a **grilling session** - getting the agent to ask you detailed questions about what you're building. Use `/grill-me` or `/grill-with-docs` every time you want to make a change.

### #2: The Agent Is Way Too Verbose
Agents often speak a different language than devs. The fix is a **shared language** (`CONTEXT.md`). It helps agents decode the jargon used in the project, reducing 20 words to 1.

### #3: The Agent Broke My App
Accepting AI code without tests leads to "The Dumb Zone." The fix is **empirical proof** via `/tdd`. Force the agent to write a failing test first.

## 📁 Project Structure

- `.gemini/skills/`: **The Discovery Tier.** Flat symlinks that allow the Gemini CLI to auto-discover skills.
- `source-skills/`: **The Source.** A nested, organized hierarchy of your skills.
- `docs/agents/`: **Metadata.** Configurations for issue trackers, triage labels, and domain layouts.
- `docs/adr/`: **Architecture.** Architectural Decision Records (ADRs) to track the "Why".
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

4.  **Initial Setup**:
    Before using engineering skills like `/tdd` or `/to-prd`, you **must** run the setup skill:
    ```
    /setup-matt-pocock-skills
    ```

## 🧙 Available Skills

- `/grill-me`: Relentless Socratic interrogation of your plans.
- `/to-prd`: Generates the `PRD.md` based on your alignment session.
- `/to-issues`: Breaks a PRD into vertical "Tracer Bullet" issues in `.scratch/`.
- `/tdd`: Guides you through a strict Red-Green-Refactor loop.
- `/diagnose`: Disciplined debugging protocol for hard-to-crack bugs.
- `/write-a-skill`: Automated workflow to create and sync new skills.
- `/update-from-upstream`: Keeps your port in sync with Matt's original repository.

---
*Inspired by Matt Pocock. Ported to Gemini CLI by Ni-ko-laj.*
