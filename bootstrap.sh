#!/bin/bash

# Gemini-Pocock Bootstrap Script
# Initializes the native skills system for the workspace.

echo "🚀 Initializing Gemini-Pocock Skills..."

# 1. Ensure directories exist
mkdir -p .gemini/skills source-skills .scratch docs/agents docs/prd docs/issues docs/adr

# 2. Run the sync script to create symlinks
if [ -f "scripts/sync-skills.cjs" ]; then
    echo "🔗 Syncing skills..."
    node scripts/sync-skills.cjs
else
    echo "❌ Error: scripts/sync-skills.cjs not found!"
    exit 1
fi

echo "✅ Initialization complete."
echo "💡 To use skills, ensure they are listed in your GEMINI.md or just start a new session."
