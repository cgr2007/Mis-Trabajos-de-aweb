with open(r'c:\Clase 25 26\AWEB Clase\CSS\neon_styles.css', 'r', encoding='utf-8') as f:
    lines = f.readlines()
    for i in range(1, 12):
        print(f"{i}: {repr(lines[i-1])}")
