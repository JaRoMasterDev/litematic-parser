import assert from 'node:assert';
import { readFile } from 'node:fs/promises';
import { loadLitematic } from '../src/index.js';

async function runTest() {
    try {
        const litematicPath = new URL('./DualFullBlockCrafter.litematic', import.meta.url).pathname;
        const expectedJsonPath = new URL('./DualFullBlockCrafter.json', import.meta.url).pathname;

        const result = await loadLitematic(litematicPath);
        const expectedJson = JSON.parse(await readFile(expectedJsonPath, 'utf-8'));

        const resultJson = JSON.parse(JSON.stringify(result, (key, value) => {
            if (typeof value === 'bigint') {
                return Number(value);
            }
            return value;
        }));

        assert.deepStrictEqual(resultJson, expectedJson);
        console.log('PASS: Arrays matched expected JSON.');
    } catch (error) {
        console.error('FAIL:', error);
        process.exit(1);
    }
}

runTest();
