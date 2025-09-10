import { readFile } from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), 'db.json');
    const data = await readFile(filePath, 'utf-8');
    const jsonData = JSON.parse(data);

    res.status(200).json(jsonData.user); // Adjust the key based on your `db.json` structure
  } catch (error) {
    res.status(500).json({ error: 'Failed to load data' });
  }
}