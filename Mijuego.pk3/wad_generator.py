import struct

def create_wad(filename):
    # Minimal Doom Map Data for a 256x256 square room
    # Vertexes: (0,0), (256,0), (256,256), (0,256)
    vertexes = [
        struct.pack('<hh', 0, 0),
        struct.pack('<hh', 256, 0),
        struct.pack('<hh', 256, 256),
        struct.pack('<hh', 0, 256)
    ]
    
    # Linedefs: v1, v2, flags, special, tag, side_front, side_back
    linedefs = [
        struct.pack('<hhhhhhh', 0, 1, 1, 0, 0, 0, -1),
        struct.pack('<hhhhhhh', 1, 2, 1, 0, 0, 1, -1),
        struct.pack('<hhhhhhh', 2, 3, 1, 0, 0, 2, -1),
        struct.pack('<hhhhhhh', 3, 0, 1, 0, 0, 3, -1)
    ]
    
    # Sidedefs: off_x, off_y, upper[8], lower[8], middle[8], sector
    def pack_side(sector):
        return struct.pack('<hh8s8s8sH', 0, 0, b'-', b'-', b'STARTAN3', sector)
    
    sidedefs = [pack_side(0) for _ in range(4)]
    
    # Sectors: floor_h, ceil_h, floor_tex[8], ceil_tex[8], light, special, tag
    sectors = [
        struct.pack('<hh8s8sHHH', 0, 128, b'FLOOR0_1', b'CEIL1_1', 160, 0, 0)
    ]
    
    # Things: x, y, angle, type, flags
    things = [
        struct.pack('<hhhhh', 128, 128, 0, 1, 7) # Player 1 Start
    ]
    
    # Empty/Marker lumps
    empty = b''
    
    lumps_to_write = [
        ("MAP01", empty),
        ("THINGS", b''.join(things)),
        ("LINEDEFS", b''.join(linedefs)),
        ("SIDEDEFS", b''.join(sidedefs)),
        ("VERTEXES", b''.join(vertexes)),
        ("SECTORS", b''.join(sectors))
    ]
    
    # Calculate Directory
    lump_count = len(lumps_to_write)
    header_size = 12
    directory_offset = header_size + sum(len(data) for _, data in lumps_to_write)
    
    wad_header = struct.pack('<4sII', b'PWAD', lump_count, directory_offset)
    
    with open(filename, 'wb') as f:
        f.write(wad_header)
        current_offset = header_size
        directory = []
        for name, data in lumps_to_write:
            f.write(data)
            directory.append(struct.pack('<II8s', current_offset, len(data), name.encode('ascii').ljust(8, b'\x00')))
            current_offset += len(data)
        
        f.write(b''.join(directory))

if __name__ == "__main__":
    create_wad(r'c:\Clase 25 26\AWEB Clase\Proyectos\Mijuego.pk3\maps\MAP01.wad')
    print("MAP01.wad generado con éxito.")
