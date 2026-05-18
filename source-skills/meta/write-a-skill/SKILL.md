---
name: write-a-skill
description: Create new agent skills with proper structure and automatic syncing. Use when user wants to create, write, or build a new skill.
---

# Writing Skills

## Process

1. **Gather requirements** - ask user about:
   - What task/domain does the skill cover?
   - What specific use cases should it handle?
   - Where in `source-skills/` should it live (meta, productivity, engineering)?

2. **Draft the skill** - create:
   - SKILL.md with YAML frontmatter (name, description)
   - Body with concise instructions

3. **Automated Implementation** - Once approved:
   - Create the directory: `source-skills/<category>/<skill-name>`
   - Write the `SKILL.md`
   - Run the sync script: `node scripts/sync-skills.cjs`

## Skill Structure

```
source-skills/<category>/<skill-name>/
└── SKILL.md           # Main instructions (required)
```

## SKILL.md Template

```md
---
name: skill-name
description: Brief description. Use when [triggers].
---

# Skill Name

## Workflow
[Steps]
```
