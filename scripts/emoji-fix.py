#!/usr/bin/env python3
"""Fix remaining emoji: JSON data files, Noah dove-fly, JS files."""

import os
import re

ROOT = "/Users/nigelmorris/Documents/GitHub/bible-stories"

DOVE_18 = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 7h.01"/><path d="M4 14c2-2 4-4 6-4s3 2 5 2 4-2 6-4"/><path d="M16 14l-4 3-4-3"/><path d="M20 10l-4 6-4-6"/></svg>'

total = 0

# ── 1. Fix JSON data files (all emoji in JSON) ─────────────────────────
for dirpath, dirnames, filenames in os.walk(ROOT):
    if '/.kilo' in dirpath or '/node_modules' in dirpath:
        continue
    for f in filenames:
        if f.endswith('.json') and 'data' in dirpath:
            filepath = os.path.join(dirpath, f)
            with open(filepath, 'r', encoding='utf-8') as fh:
                c = fh.read()
            if any(ord(ch) > 127 for ch in c):
                original = c
                c = re.sub(r'📖', '', c)
                c = re.sub(r'🕊️', '', c)
                c = re.sub(r'🪦', '', c)
                with open(filepath, 'w', encoding='utf-8') as fh:
                    fh.write(c)
                total += 1
                print(f"Updated: {filepath}")

# ── 2. Fix Noah/index.html dove-fly ─────────────────────────────────
noah_html = os.path.join(ROOT, 'Noah', 'index.html')
with open(noah_html, 'r', encoding='utf-8') as f:
    c = f.read()
original = c

c = re.sub(
    r'<div class="dove-fly">[^\x00-\x7F]+</div>',
    f'<div class="dove-fly">{DOVE_18}</div>',
    c
)

if c != original:
    total += 1
    with open(noah_html, 'w', encoding='utf-8') as f:
        f.write(c)
    print(f"Updated: {noah_html}")

# ── 3. Fix Noah JS file ─────────────────────────────────
noah_js = os.path.join(ROOT, 'Noah', 'js', 'noah-story.js')
with open(noah_js, 'r', encoding='utf-8') as f:
    c = f.read()
original = c

c = c.replace('🕊️', '')

if c != original:
    total += 1
    with open(noah_js, 'w', encoding='utf-8') as f:
        f.write(c)
    print(f"Updated: {noah_js}")

print(f"\nTotal files updated: {total}")
