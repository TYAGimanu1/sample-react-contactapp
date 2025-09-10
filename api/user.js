import { readFile } from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), 'db.json');
    const data = await readFile(filePath, 'utf-8');
    const jsonData = JSON.parse(data);

    const userId = req.query.id; // Assuming the ID is passed as a query parameter
    const user = jsonData.user.find(u => u.id === userId);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to load data' });
  }
}