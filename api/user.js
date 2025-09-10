import { readFile, writeFile } from 'fs/promises';
import path from 'path';

const dbPath = path.join(process.cwd(), 'db.json');

export default async function handler(req, res) {
  const { method } = req;

  if (method === 'GET') {
    const id = req.query.id;

    try {
      const data = JSON.parse(await readFile(dbPath, 'utf-8'));
      if (id) {
        const user = data.user.find((user) => user.id === parseInt(id));
        if (user) {
          return res.status(200).json(user);
        } else {
          return res.status(404).json({ error: 'User not found' });
        }
      } else {
        return res.status(200).json(data.user);
      }
    } catch (error) {
      return res.status(500).json({ error: 'Failed to load data' });
    }
  }

  if (method === 'POST') {
    const newUser = req.body;

    if (!newUser || !newUser.id || !newUser.name) {
      return res.status(400).json({ error: 'Invalid user data' });
    }

    try {
      const data = JSON.parse(await readFile(dbPath, 'utf-8'));
      data.user.push(newUser);
      await writeFile(dbPath, JSON.stringify(data, null, 2));
      return res.status(201).json({ message: 'User added successfully' });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to save data' });
    }
  }

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

  return res.status(405).json({ error: 'Method Not Allowed' });
}