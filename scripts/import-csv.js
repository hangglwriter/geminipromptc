import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CSV parsing helper
function parseCSV(text) {
    const lines = text.trim().split('\n');
    const headers = lines[0].split(',').map(h => h.trim());

    const result = [];

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        // Handle quoted CSV fields
        const matches = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || [];
        const values = matches.map(m => m.replace(/^"|"$/g, '').replace(/""/g, '"'));

        if (values.length > 0) {
            const obj = { id: i }; // Auto-generate ID
            headers.forEach((h, index) => {
                obj[h] = values[index] || '';
            });

            // Clean up image path if user just put filename
            if (obj.image && !obj.image.startsWith('http') && !obj.image.startsWith('/')) {
                obj.image = `/images/${obj.image}`;
            }

            result.push(obj);
        }
    }
    return result;
}

const csvPath = path.join(__dirname, '../prompts.csv');
const jsonPath = path.join(__dirname, '../src/data/prompts.json');

try {
    if (!fs.existsSync(csvPath)) {
        console.error('❌ prompts.csv files not found!');
        process.exit(1);
    }

    const csvContent = fs.readFileSync(csvPath, 'utf-8');
    const jsonData = parseCSV(csvContent);

    fs.writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2), 'utf-8');
    console.log(`✅ Successfully converted ${jsonData.length} prompts to JSON!`);

} catch (error) {
    console.error('❌ Error converting CSV:', error);
}
