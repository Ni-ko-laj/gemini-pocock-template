---
name: update-from-upstream
description: Sync changes from Matt Pocock's upstream repository while preserving Gemini-native enhancements. Use when you want to check for new skills or updates from the original repo.
---

# Update from Upstream

This skill ensures that your Gemini-Pocock port stays in sync with Matt's original work without losing our custom Gemini-native automation.

## 🛡 Sacred Paths & Architectural Divergence

We have intentionally diverged from the upstream repo in specific areas to optimize for the Gemini CLI. **DO NOT OVERWRITE** these files with upstream content without manually merging the logic:

1.  **`meta/write-a-skill/SKILL.md`**:
    - **Divergence**: Upstream is instruction-only. Our version includes **Automated Implementation** steps (folder creation, file writing, and auto-syncing).
    - **Rationale**: Gemini CLI agents have powerful file-system tools; we use them to eliminate the "grunt work" of skill scaffolding.

2.  **`productivity/grill-me/SKILL.md`**:
    - **Divergence**: Optimized to leverage Gemini's native `grep_search` and `glob` tools.
    - **Rationale**: The instruction to "explore the codebase instead of asking" is a first-class citizen here, making the grilling more empirical and less conversational.

3.  **`scripts/sync-skills.cjs`**:
    - **Divergence**: This is a custom Node.js engine specifically for Gemini's `.gemini/skills/` discovery tier.
    - **Rationale**: Gemini CLI does not support nested discovery; this script provides the necessary "Flattening" layer.

4.  **Bucket `README.md` Files**:
    - **Divergence**: All relative links have been changed from `./skills/` to `./source-skills/`.
    - **Rationale**: We use a different top-level folder name for clarity; overwriting these would break all documentation links.

## Workflow

1.  **Preparation**:
    - Create a temporary directory: `mkdir -p /tmp/pocock-upstream`
    - Clone the upstream repo: `git clone --depth 1 https://github.com/mattpocock/skills /tmp/pocock-upstream`

2.  **Analysis**:
    - Compare the upstream `skills/` folder with our `source-skills/`.
    - Use `diff -r` or manual inspection to find new skills or updates.

3.  **Merging Strategy**:
    - **New Skills**: Copy them into the appropriate category in `source-skills/`.
    - **Existing Skills**: Merge the text updates. 
    - **Safety**: Always check the "Sacred Paths" list before committing changes to the `meta/` or `productivity/` folders.

4.  **Registration**:
    - Run the sync engine: `node scripts/sync-skills.cjs`
    - Clean up: `rm -rf /tmp/pocock-upstream`
