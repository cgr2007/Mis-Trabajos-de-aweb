import struct
import os

def create_bmp(filename, width, height, color):
    # BMP Header
    file_size = 14 + 40 + (width * height * 3)
    # file header: BM, size, res1, res2, offset
    header = struct.pack('<2sIHHI', b'BM', file_size, 0, 0, 54)
    # info header: size, w, h, planes, bpp, compression, img_size, xres, yres, colors, imp_colors
    info_header = struct.pack('<IiiHHIIiiII', 40, width, height, 1, 24, 0, 0, 0, 0, 0, 0)
    
    # Pixel data (BGR format, padded to 4 bytes)
    b, g, r = color
    # simple solid color
    row_data = struct.pack('<BBB', b, g, r) * width
    padding = b'\x00' * ((4 - (width * 3) % 4) % 4)
    pixel_data = (row_data + padding) * height
    
    with open(filename, 'wb') as f:
        f.write(header)
        f.write(info_header)
        f.write(pixel_data)
    print(f"Generated {filename}")

def generate_textures():
    base_dir = r"c:\Clase 25 26\AWEB Clase\Mijuego.pk3\texturas"
    if not os.path.exists(base_dir):
        os.makedirs(base_dir)
        
    textures = [
        ("tech_wall_blue.bmp", (255, 0, 0)), # Blue (in BGR, wait. 255,0,0 is Blue in BGR? No. BGR: B=255. Yes.)
        ("tech_wall_red.bmp", (0, 0, 255)),  # Red (BGR: R=255 -> 0,0,255)
        ("concrete_wall.bmp", (128, 128, 128)), # Grey
        ("metal_floor.bmp", (192, 192, 192)), # Silver
        ("light_panel.bmp", (255, 255, 255)), # White
        ("sci_fi_door.bmp", (50, 50, 50)),    # Dark Metal
        ("switch_off.bmp", (0, 0, 100)),      # Dark Red
        ("switch_on.bmp", (0, 100, 0)),       # Dark Green
    ]
    
    for name, color in textures:
        create_bmp(os.path.join(base_dir, name), 128, 128, color)

    # Generate TEXTURES definition
    textures_def_path = r"c:\Clase 25 26\AWEB Clase\Mijuego.pk3\TEXTURES.txt"
    with open(textures_def_path, 'w') as f:
        f.write("// Texture Definitions\n\n")
        for name, _ in textures:
            tex_name = os.path.splitext(name.upper())[0] # TECH_WALL_BLUE
            # Truncate to 8 chars? No, ZDoom supports long names in TEXTURES.
            # But standard usage often prefers short. I'll keep long names if valid ZDoom.
            # Format: Texture "Name", Width, Height { Patch "Path", X, Y }
            f.write(f'Texture "{tex_name}", 128, 128\n')
            f.write("{\n")
            f.write(f'   XScale 1.0\n   YScale 1.0\n')
            f.write(f'   Patch "texturas/{name}", 0, 0\n')
            f.write("}\n\n")
    print(f"Generated {textures_def_path}")

if __name__ == "__main__":
    generate_textures()
