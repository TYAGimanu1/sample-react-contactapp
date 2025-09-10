import fs from 'fs';
import path from 'path';

export default async (req, res) => {
  if (req.method === 'DELETE') {
    try {
      const filePath = path.resolve('db.json');
      const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

      const userId = req.query.id;
      const updatedUsers = data.user.filter(user => user.id !== String(userId));

      if (updatedUsers.length === data.user.length) {
        return res.status(404).json({ message: 'User not found' });
      }

      data.user = updatedUsers;
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
