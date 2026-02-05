import os

path = r'c:\Clase 25 26\AWEB Clase\CSS\neon_styles.css'
with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Fix :root variables (lines 3-10, indices 2-9)
# Double check indices from debug output:
# 3: '    neon-cyan: #00f3ff;\n' -> index 2
# 10: "    font-display: 'Orbitron', sans-serif;\n" -> index 9
for i in range(2, 10):
    line = lines[i]
    if line.strip().startswith('neon-') or line.strip().startswith('bg-') or line.strip().startswith('glass-') or line.strip().startswith('font-'):
        # Add -- prefix
        # Preserve indentation (4 spaces)
        lines[i] = "    --" + line.lstrip()

with open(path, 'w', encoding='utf-8') as f:
    f.writelines(lines)
