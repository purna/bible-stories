#!/usr/bin/env python3
import re

def reposition_css_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        css = f.read()
    original = css

    def modify_block(css_text, selector, is_choices):
        pattern = re.compile(re.escape(selector) + r'\s*\{')
        result = css_text
        offset = 0
        for m in pattern.finditer(css_text):
            adjusted_start = m.start() + offset
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

            if is_choices:
                modified = re.sub(r'left:\s*50%;', 'left: 4vw;', modified)
                modified = re.sub(r'\s*transform:\s*translateX\(-50%\)[^;]*;', ';', modified)
                modified = re.sub(r'justify-content:\s*center;', 'justify-content: flex-start;', modified)
                modified = re.sub(r'width:\s*min\(92vw,\s*760px\)', 'width: min(45vw, 420px)', modified)
            else:
                modified = re.sub(r'left:\s*50%;', 'right: 4vw;', modified)
                modified = re.sub(r'transform:\s*translateX\(-50%\)\s*rotate\(-0\.5deg\)', 'transform: rotate(-0.5deg);', modified)
                modified = re.sub(r'transform:\s*translateX\(-50%\)[^r;]*;', 'transform: none;', modified)
                modified = re.sub(r'width:\s*90%', 'width: min(40vw, 360px)', modified)

            result = result[:block_open] + modified + result[block_end - 1:]
            offset += len(modified) - (block_end - block_open)

        return result

    css = modify_block(css, '#choices', True)
    css = modify_block(css, '#delayNote', False)

    if css != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(css)
        print(f"Updated: {filepath}")
        return True
    print(f"No changes: {filepath}")
    return False

files = [
    "/Users/nigelmorris/Documents/GitHub/bible-stories/Deborah/css/deborah-comic.css",
    "/Users/nigelmorris/Documents/GitHub/bible-stories/Nehemiah/css/nehemiah-comic.css",
]

for fp in files:
    reposition_css_file(fp)

# Verify Deborah
print("\n--- Deborah #choices ---")
with open("/Users/nigelmorris/Documents/GitHub/bible-stories/Deborah/css/deborah-comic.css", 'r') as f:
    for i, line in enumerate(f, 1):
        if 407 <= i <= 411:
            print(f"{i}: {line.rstrip()}")
print("\n--- Deborah #delayNote ---")
with open("/Users/nigelmorris/Documents/GitHub/bible-stories/Deborah/css/deborah-comic.css", 'r') as f:
    for i, line in enumerate(f, 1):
        if 423 <= i <= 431:
            print(f"{i}: {line.rstrip()}")
