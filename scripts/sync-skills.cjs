const fs = require('fs');
const path = require('path');

const SOURCE_DIR = 'source-skills';
const TARGET_DIR = '.gemini/skills';

function getSkillMetadata(skillPath) {
    const skillMd = path.join(skillPath, 'SKILL.md');
    if (!fs.existsSync(skillMd)) return null;

    try {
        const content = fs.readFileSync(skillMd, 'utf8');
        if (content.startsWith('---')) {
            const parts = content.split('---');
            if (parts.length >= 3) {
                // Simple YAML-like parser for name and description
                const metadata = {};
                const lines = parts[1].split('\n');
                lines.forEach(line => {
                    const match = line.match(/^(\w+):\s*(.*)$/);
                    if (match) {
                        metadata[match[1]] = match[2].trim();
                    }
                });
                return metadata;
            }
        }
    } catch (e) {
        console.error(`Error parsing ${skillMd}: ${e}`);
    }
    return null;
}

function sync() {
    if (!fs.existsSync(TARGET_DIR)) {
        fs.mkdirSync(TARGET_DIR, { recursive: true });
    }

    const skillsFound = {};

    function walk(dir) {
        const files = fs.readdirSync(dir);
        if (files.includes('SKILL.md')) {
            const metadata = getSkillMetadata(dir);
            if (!metadata || !metadata.name) {
                console.warn(`Warning: Skill at ${dir} missing 'name' in YAML frontmatter. Skipping.`);
            } else {
                const skillName = metadata.name;
                if (skillsFound[skillName]) {
                    console.error(`ERROR: Collision detected! Both '${dir}' and '${skillsFound[skillName]}' claim the name '${skillName}'.`);
                    process.exit(1);
                }
                skillsFound[skillName] = dir;
            }
        }
        files.forEach(file => {
            const fullPath = path.join(dir, file);
            if (fs.statSync(fullPath).isDirectory()) {
                walk(fullPath);
            }
        });
    }

    walk(SOURCE_DIR);

    // Remove existing symlinks
    const existingLinks = fs.readdirSync(TARGET_DIR);
    existingLinks.forEach(link => {
        const linkPath = path.join(TARGET_DIR, link);
        if (fs.lstatSync(linkPath).isSymbolicLink()) {
            fs.unlinkSync(linkPath);
        }
    });

    // Create new symlinks
    for (const [name, sourcePath] of Object.entries(skillsFound)) {
        const targetPath = path.join(TARGET_DIR, name);
        const absSource = path.resolve(sourcePath);
        fs.symlinkSync(absSource, targetPath);
        console.log(`Linked: ${name} -> ${sourcePath}`);
    }
}

sync();
