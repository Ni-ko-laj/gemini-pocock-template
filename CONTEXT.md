# Context: Gemini-Pocock Skills

This document defines the ubiquitous language for the Gemini-native implementation of Matt Pocock's skills framework.

## Key Terms

- **ASH (Active Software Head)**: The specific, narrow task or vertical slice currently being worked on by the agent.
- **Grilling**: A Socratic interview process where the agent interrogates the user to harden a design before implementation.
- **Tracer Bullet**: A thin vertical slice of functionality that cuts through all layers of the system (DB, API, UI) to prove a path.
- **Skill**: A modular instruction set (`SKILL.md`) that the agent can "activate" to gain specialized capabilities.
- **Source Skill**: The version-controlled source of a skill in `source-skills/`.
- **Native Skill**: A symlink in `.gemini/skills/` discovered by the Gemini CLI.
- **Sync-Link**: The process of flattening the nested `source-skills/` into the flat `.gemini/skills/` tier.
- **Local Markdown Tracker**: Using `.scratch/` files to manage tasks instead of an external issue tracker.
