# Context: Gemini-Pocock Template

This document defines the ubiquitous language for the Gemini-Pocock skills framework.

## Core Concepts

- **ASH (Active Software Head)**: The specific, narrow task or vertical slice currently being worked on. It is tracked in the generated `PRD.md` and `.scratch/` issues.
- **The Engine**: The `scripts/sync-skills.cjs` Node.js script that flattens nested source skills into the native Gemini discovery tier.
- **Discovery Tier**: The `.gemini/skills/` directory where the Gemini CLI automatically looks for skill instructions.
- **Source of Truth**: The `source-skills/` directory, containing the version-controlled, categorized skill folders.
- **Grilling**: The Socratic process of alignment before execution, typically resulting in a PRD.
- **Tracer Bullets**: Vertical slices of functionality that are independently verifiable and shippable.
- **Local Markdown Tracker**: The practice of using `.scratch/` for issue tracking to ensure project portability and offline capability.

## Architectural Conventions

- **Native Discovery**: We prioritize the Gemini CLI's built-in discovery mechanism over manual instruction-reading.
- **Automated Meta-Skills**: Skills like `/write-a-skill` are enhanced with agentic automation to handle file system operations.
- **Relative Portability**: All scripts and configuration files must use relative paths to ensure the repository works immediately after cloning and bootstrapping.
