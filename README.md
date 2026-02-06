# litematic-parser

A parser to get useful information from `.litematic` (Minecraft schematics) files.

## Installation

```bash
npm install litematic-parser
```

## Usage

```typescript
import { loadLitematic } from 'litematic-parser';
import { resolve } from 'path';

async function main() {
    const filePath = resolve('./my-schematic.litematic');
    
    try {
        const litematic = await loadLitematic(filePath);

        console.log(`Loaded schematic: ${litematic.Metadata.Name}`);
        console.log(`Author: ${litematic.Metadata.Author}`);
        console.log(`Size: ${litematic.Metadata.EnclosingSize.x}x${litematic.Metadata.EnclosingSize.y}x${litematic.Metadata.EnclosingSize.z}`);
        
        // Access regions and blocks
        for (const [name, region] of Object.entries(litematic.Regions)) {
            console.log(`Region: ${name}`);
            console.log(`Block Palette Size: ${region.BlockStatePalette.length}`);
        }
    } catch (error) {
        console.error('Failed to load litematic:', error);
    }
}

main();
```

## API

### `loadLitematic(filePath: string): Promise<Litematic>`

Reads, decompresses, and parses a `.litematic` file.

- **filePath**: Path to the `.litematic` file.
- **Returns**: A Promise that resolves to a `Litematic` object containing metadata and region data.

## Types

The package exports TypeScript interfaces for the parsed data:
- `Litematic`: Root object.
- `Metadata`: Schematic metadata (Name, Author, Size, etc.).
- `Region`: Contains block states, entities, and tile entities.
- `BlockStatePalette`: Palette of blocks used in the region.

## Development

```bash
# Build the project
npm run build

# Run tests
npm test
```

## License

MIT
