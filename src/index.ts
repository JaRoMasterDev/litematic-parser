import { readFile } from 'node:fs/promises';
import { gunzipSync } from 'node:zlib';
import * as nbt from 'prismarine-nbt';
import type { Litematic } from './types.js';

export * from './types.js';

export async function loadLitematic(filePath: string): Promise<Litematic> {
    try {
        // 1. Read the raw file from disk
        const rawBuffer = await readFile(filePath);

        // 2. Litematic files are Gzipped. Decompress it.
        const decompressed = gunzipSync(rawBuffer);

        // 3. Parse the NBT data
        const { parsed } = await nbt.parse(decompressed);

        // 4. Return the simplified value
        return nbt.simplify(parsed) as Litematic;
    } catch (error) {
        console.error("Failed to parse litematic:", error);
        throw error;
    }
}