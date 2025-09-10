import fs from 'fs';
import path from 'path';

export default async (req, res) => {
  if (req.method === 'GET') {
    try {
      const filePath = path.resolve('db.json');
      const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

      const userId = req.query.id;
      const user = data.user.find(user => user.id === userId);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json({ user });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching user', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
