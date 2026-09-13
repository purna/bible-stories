#!/usr/bin/env python3
"""Reposition #choices and #delayNote within their CSS blocks only.
Target: Deborah and Nehemiah (open tabs).
Changes: #choices: center→left-bottom, #delayNote: center→right-bottom."""

import re

def reposition_css_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        css = f.read()
    original = css

    def modify_block(css_text, selector):
        # Find the block
        pattern = re.compile(re.escape(selector) + r'\s*\{')
        for m in pattern.finditer(css_text):
            block_open = m.end()
            brace_count = 1
            pos = block_open
            while brace_count > 0 and pos < len(css_text):
                if css_text[pos] == '{':
                    brace_count += 1
                elif css_text[pos] == '}':
                    brace_count -= 1
                pos += 1
            block_end = pos

            block_content = css_text[block_open:block_end - 1]
            modified = block_content

            if selector == '#choices':
                # Change left: 50% → left: 4vw
                modified = re.sub(r'left:\s*50%;', 'left: 4vw;', modified)
                # Remove transform: translateX(-50%);
                modified = re.sub(
                    r'\n\s*transform:\s*translateX\(-50%\)[^;]*;',
                    ';',
                    modified
                )
                modified = re.sub(
                    r'\s*transform:\s*translateX\(-50%\)[^;]*;',
                    ';',
                    modified
                )
            elif selector == '#delayNote':
                # Change left: 50% → right: 4vw
                modified = re.sub(r'left:\s*50%;', 'right: 4vw;', modified)
                # Change transform: translateX(-50%) rotate(-0.5deg) → transform: rotate(-0.5deg)
                modified = re.sub(
                    r'transform:\s*translateX\(-50%\)\s*rotate\(-0\.5deg\)',
                    'transform: rotate(-0.5deg);',
                    modified
                )
                modified = re.sub(
                    r'transform:\s*translateX\(-50%\)\s*\n\s*rotate\(-0\.5deg\)',
                    'transform: rotate(-0.5deg);',
                    modified
                )
                # Remove translateX(-50%) from any remaining transform
                modified = re.sub(
                    r'transform:\s*translateX\(-50%\)[^r;]*;',
                    'transform: none;',
                    modified
                )

            new_block = css_text[block_open:block_end - 1]
            css_text = css_text[:block_open] + modified + css_text[block_end - 1:]
            return css_text

        return css_text

    css = modify_block(css, '#choices')
    css = modify_block(css, '#delayNote')

    if css != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(css)
        print(f"Updated: {filepath}")
        return True
    return False

files = [
    "/Users/nigelmorris/Documents/GitHub/bible-stories/Deborah/css/deborah-comic.css",
    "/Users/nigelmorris/Documents/GitHub/bible-stories/Nehemiah/css/nehemiah-comic.css",
]

changed = 0
for fp in files:
    if modify_block(open(fp, 'r', encoding='utf-8').read() != open(fp, 'r', encoding='utf-8').read(), fp) if False else reposition_css_file(fp):
        changed += 1

# Actually call the function properly
changed = 0
for fp in files:
    if reposition_css_file(fp):
        changed += 1

print(f"\nFiles updated: {changed}")
