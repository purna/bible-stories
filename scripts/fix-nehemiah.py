#!/usr/bin/env python3
import re

filepath = "/Users/nigelmorris/Documents/GitHub/bible-stories/Nehemiah/css/nehemiah-comic.css"

with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Line numbers are 1-indexed in the file, 0-indexed in the array
# First #choices block at line 352 (0-indexed: 351)
# First #delayNote block at line 368 (0-indexed: 367)
# Second #choices at line 878 (0-indexed: 877)
# Second #delayNote at line 894 (0-indexed: 893)

changes = [
    # Line 352: position: absolute; left: 50%; bottom: 11.5vh; transform: translateX(-50%);
    (351, "  position: absolute; left: 50%; bottom: 11.5vh; transform: translateX(-50%);\n",
     "  position: absolute; left: 4vw; bottom: 11.5vh;\n"),
    # Line 353: justify-content: center;
    (352, "  z-index: 15; display: flex; gap: 14px; flex-wrap: wrap; justify-content: center;\n",
     "  z-index: 15; display: flex; gap: 14px; flex-wrap: wrap; justify-content: flex-start;\n"),
    # Line 354: width: min(92vw, 760px)
    (353, "  width: min(92vw, 760px); opacity: 0; pointer-events: none; transition: opacity .4s ease;\n",
     "  width: min(45vw, 420px); opacity: 0; pointer-events: none; transition: opacity .4s ease;\n"),
    # Line 368: delayNote positioning
    (367, "  position: absolute; left: 50%; bottom: 20px; transform: translateX(-50%) rotate(-0.5deg);\n",
     "  position: absolute; right: 4vw; bottom: 20px; transform: rotate(-0.5deg);\n"),
    # Line 374: delayNote width
    (373, "  text-align: center; width: 90%; line-height: 1.6;\n",
     "  text-align: center; width: min(40vw, 360px); line-height: 1.6;\n"),
    # Second #choices at line 878
    (877, "  position: absolute; left: 50%; bottom: 11.5vh; transform: translateX(-50%);\n",
     "  position: absolute; left: 4vw; bottom: 11.5vh;\n"),
    # Second choices justify-content at line 879
    (878, "  z-index: 15; display: flex; gap: 14px; flex-wrap: wrap; justify-content: center;\n",
     "  z-index: 15; display: flex; gap: 14px; flex-wrap: wrap; justify-content: flex-start;\n"),
    # Second choices width at line 880
    (879, "  width: min(92vw, 760px); opacity: 0; pointer-events: none; transition: opacity .4s ease;\n",
     "  width: min(45vw, 420px); opacity: 0; pointer-events: none; transition: opacity .4s ease;\n"),
    # Second delayNote at line 894
    (893, "  position: absolute; left: 50%; bottom: 20px; transform: translateX(-50%) rotate(-0.5deg);\n",
     "  position: absolute; right: 4vw; bottom: 20px; transform: rotate(-0.5deg);\n"),
    # Second delayNote width at line 900
    (899, "  text-align: center; width: 90%; line-height: 1.6;\n",
     "  text-align: center; width: min(40vw, 360px); line-height: 1.6;\n"),
]

# Apply changes from bottom to top so line numbers don't shift
changes.sort(key=lambda x: x[0], reverse=True)

for line_idx, old_line, new_line in changes:
    if lines[line_idx] == old_line:
        lines[line_idx] = new_line
        print(f"Changed line {line_idx + 1}")
    else:
        print(f"MISMATCH at line {line_idx + 1}:")
        print(f"  Expected: {repr(old_line)}")
        print(f"  Got:      {repr(lines[line_idx])}")

with open(filepath, 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("\nDone!")
