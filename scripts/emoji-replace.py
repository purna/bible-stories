#!/usr/bin/env python3
"""Replace all emoji in HTML/index.html, build-story.mjs, and JSON data files with inline SVG or plain text."""

import os
import re

ROOT = "/Users/nigelmorris/Documents/GitHub/bible-stories"

FLAME_SVG_64 = '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>'

FLAME_SVG_72 = '<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>'

SPARKLE_SVG_72 = '<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3z"/></svg>'

DOVE_SVGS = []

total_files = 0

# ── 1. Replace in all index.html files ─────────────────────────────────────
html_files = []
for dirpath, dirnames, filenames in os.walk(ROOT):
    if '/.kilo' in dirpath or '/node_modules' in dirpath:
        continue
    for f in filenames:
        if f == 'index.html':
            html_files.append(os.path.join(dirpath, f))

for filepath in html_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    original = content

    # Replace any emoji in bigtorch div with flame SVG (64px)
    content = re.sub(
        r'<div class="bigtorch">[^\x00-\x7F]+</div>',
        f'<div class="bigtorch">{FLAME_SVG_64}</div>',
        content
    )

    # Replace emoji in bigicon divs with sparkle SVG (72px)
    # Eiljah had 🔥 in bigicon (fire from heaven - flame is more appropriate)
    # Adam had ✨ (sparkle)
    # Daniel had 🦁 (lion - sparkle is reasonable substitute)
    content = re.sub(
        r'<div class="bigicon">[^\x00-\x7F]+</div>',
        f'<div class="bigicon">{SPARKLE_SVG_72}</div>',
        content
    )

    # Replace 🕊️ in bird-fly divs with dove SVG (3 different sizes)
    dove_svgs = [
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 7h.01"/><path d="M4 14c2-2 4-4 6-4s3 2 5 2 4-2 6-4"/><path d="M16 14l-4 3-4-3"/><path d="M20 10l-4 6-4-6"/></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 7h.01"/><path d="M4 14c2-2 4-4 6-4s3 2 5 2 4-2 6-4"/><path d="M16 14l-4 3-4-3"/><path d="M20 10l-4 6-4-6"/></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 7h.01"/><path d="M4 14c2-2 4-4 6-4s3 2 5 2 4-2 6-4"/><path d="M16 14l-4 3-4-3"/><path d="M20 10l-4 6-4-6"/></svg>',
    ]
    dove_idx = [0]
    def bird_fly_replacer(m):
        svg = dove_svgs[dove_idx[0] % 3]
        dove_idx[0] += 1
        return f'<div class="bird-fly">{svg}</div>'

    content = re.sub(
        r'<div class="bird-fly">[^\x00-\x7F]+</div>',
        bird_fly_replacer,
        content
    )

    if content != original:
        total_files += 1
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated: {filepath}")

# ── 2. Replace in build-story.mjs ───────────────────────────────────
mjs_path = os.path.join(ROOT, 'scripts', 'build-story.mjs')
with open(mjs_path, 'r', encoding='utf-8') as f:
    content = f.read()
original = content

# Remove emoji from labels
content = content.replace('📖', '')
content = content.replace('🕊️', '')
# Replace 🔥 in bigtorch with flame SVG
content = re.sub(
    r'<div class="bigtorch">[^\x00-\x7F]+</div>',
    f'<div class="bigtorch">{FLAME_SVG_64}</div>',
    content
)
# Replace 🕊️ in bird-fly
content = re.sub(
    r'<div class="bird-fly">[^\x00-\x7F]+</div>',
    '<div class="bird-fly"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 7h.01"/><path d="M4 14c2-2 4-4 6-4s3 2 5 2 4-2 6-4"/><path d="M16 14l-4 3-4-3"/><path d="M20 10l-4 6-4-6"/></svg></div>',
    content
)

if content != original:
    total_files += 1
    with open(mjs_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated: {mjs_path}")

# ── 3. Replace 📖 and 🕊️ in story JSON data files ───────────────────────────
for dirpath, dirnames, filenames in os.walk(ROOT):
    if '/.kilo' in dirpath or '/node_modules' in dirpath:
        continue
    for f in filenames:
        if f.endswith('.json') and '/data/' in dirpath:
            filepath = os.path.join(dirpath, f)
            with open(filepath, 'r', encoding='utf-8') as fh:
                c = fh.read()
            if '📖' in c or '🕊️' in c:
                c = c.replace('📖', '').replace('🕊️', '')
                with open(filepath, 'w', encoding='utf-8') as fh:
                    fh.write(c)
                total_files += 1
                print(f"Updated: {filepath}")

print(f"\nTotal files updated: {total_files}")
