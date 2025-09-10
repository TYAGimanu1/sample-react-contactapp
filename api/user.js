import { readFile, writeFile } from 'fs/promises';
import path from 'path';

const dbPath = path.join(process.cwd(), 'db.json');

export default async function handler(req, res) {
  const { method } = req;

  if (method === 'DELETE') {
    const id = req.query.id;

    if (!id) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    try {
      const data = JSON.parse(await readFile(dbPath, 'utf-8'));
      const userIndex = data.user.findIndex((user) => user.id === parseInt(id));

      if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found' });
      }

      data.user.splice(userIndex, 1);
      await writeFile(dbPath, JSON.stringify(data, null, 2));

      return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  try {
    const data = await readFile(dbPath, 'utf-8');
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