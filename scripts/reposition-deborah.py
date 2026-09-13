#!/usr/bin/env python3
import re

filepath = "/Users/nigelmorris/Documents/GitHub/bible-stories/Deborah/css/deborah-comic.css"

with open(filepath, 'r', encoding='utf-8') as f:
    css = f.read()
original = css

def modify_block(css_text, selector):
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
            modified = re.sub(r'left:\s*50%;', 'left: 4vw;', modified)
            modified = re.sub(r'\s*transform:\s*translateX\(-50%\)[^;]*;', ';', modified)
        elif selector == '#delayNote':
            modified = re.sub(r'left:\s*50%;', 'right: 4vw;', modified)
            modified = re.sub(r'transform:\s*translateX\(-50%\)\s*rotate\(-0\.5deg\)', 'transform: rotate(-0.5deg);', modified)
            modified = re.sub(r'transform:\s*translateX\(-50%\)[^r;]*;', 'transform: none;', modified)
        css_text = css_text[:block_open] + modified + css_text[block_end - 1:]
        return css_text
    return css_text

css = modify_block(css, '#choices')
css = modify_block(css, '#delayNote')

if css != original:
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(css)
    print("Updated Deborah CSS")
else:
    print("No changes")
