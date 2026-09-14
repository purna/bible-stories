#!/usr/bin/env python3
"""Reposition #choices and #delayNote across ALL story CSS files."""

import os
import re

ROOT = "/Users/nigelmorris/Documents/GitHub/bible-stories"

# Patterns for #choices block
CHOICES_INLINE_OLD = "position: absolute; left: 50%; bottom: 11.5vh; transform: translateX(-50%);"
CHOICES_INLINE_NEW = "position: absolute; left: 4vw; bottom: 11.5vh;"
CHOICES_JUSTIFY_OLD = "justify-content: center;"
CHOICES_JUSTIFY_NEW = "justify-content: flex-start;"
CHOICES_WIDTH_OLD = "width: min(92vw, 760px)"
CHOICES_WIDTH_NEW = "width: min(45vw, 420px)"

# Patterns for #delayNote block
DELAYNOTE_INLINE_OLD = "position: absolute; left: 50%; bottom: 20px; transform: translateX(-50%) rotate(-0.5deg);"
DELAYNOTE_INLINE_NEW = "position: absolute; right: 4vw; bottom: 20px; transform: rotate(-0.5deg);"
DELAYNOTE_WIDTH_OLD = "width: 90%"
DELAYNOTE_WIDTH_NEW = "width: min(40vw, 360px)"

files_changed = []

for dirpath, dirnames, filenames in os.walk(ROOT):
    if '/.kilo' in dirpath or '/node_modules' in dirpath:
        continue
    for f in filenames:
        if not f.endswith('.css'):
            continue
        fp = os.path.join(dirpath, f)
        with open(fp, 'r', encoding='utf-8') as fh:
            css = fh.read()
        original = css

        # Check if this file has relevant blocks
        if 'left: 50%' not in css:
            continue
        if '#choices' not in css and '#delayNote' not in css:
            continue

        # Process #choices blocks
        def modify_block(css_text, selector, modifications):
            """Apply modifications only within the specified CSS block."""
            pattern = re.compile(re.escape(selector) + r'\s*\{')
            result = css_text
            offset = 0

            for m in pattern.finditer(css_text):
                block_start = m.start() + offset
                block_open = m.end() + offset
                brace_count = 1
                pos = block_open
                while brace_count > 0 and pos < len(css_text):
                    if css_text[pos] == '{':
                        brace_count += 1
                    elif css_text[pos] == '}':
                        brace_count -= 1
                    pos += 1
                block_end = pos + offset

                block_content = css_text[block_open:block_end - 1]
                modified = block_content

                for old_str, new_str in modifications:
                    modified = modified.replace(old_str, new_str)

                result = result[:block_open] + modified + result[block_end - 1:]
                offset += len(modified) - (block_end - block_open)

            return result

        # Apply #choices modifications
        css = modify_block(css, '#choices', [
            (CHOICES_INLINE_OLD, CHOICES_INLINE_NEW),
            (CHOICES_JUSTIFY_OLD, CHOICES_JUSTIFY_NEW),
            (CHOICES_WIDTH_OLD, CHOICES_WIDTH_NEW),
        ])

        # Apply #delayNote modifications
        css = modify_block(css, '#delayNote', [
            (DELAYNOTE_INLINE_OLD, DELAYNOTE_INLINE_NEW),
            (DELAYNOTE_WIDTH_OLD, DELAYNOTE_WIDTH_NEW),
        ])

        if css != original:
            files_changed.append(fp)
            with open(fp, 'w', encoding='utf-8') as fh:
                fh.write(css)
            print(f"Updated: {fp}")

print(f"\nTotal files updated: {len(files_changed)}")
