import fs from 'fs';
import path from 'path';

export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const filePath = path.resolve('db.json');
      const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

      const newUser = req.body;
      data.user.push(newUser);

      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

      res.status(201).json({ message: 'User added successfully', user: newUser });
    } catch (error) {
      res.status(500).json({ message: 'Error adding user', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
