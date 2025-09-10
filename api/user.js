import { readFile } from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), 'db.json');
    const data = await readFile(filePath, 'utf-8');
    const jsonData = JSON.parse(data);

    if (req.method === 'GET' && req.query.id) {
      const user = jsonData.user.find(u => u.id === req.query.id);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } else {
      res.status(200).json(jsonData.user);
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to load data' });
  }
}