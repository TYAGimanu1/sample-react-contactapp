const path = require('path');
const fs = require('fs/promises');

module.exports = async (req, res) => {
  const dbPath = path.join(__dirname, '..', 'db.json'); // Adjust the path if necessary
  try {
    const data = await fs.readFile(dbPath, 'utf-8');
    const jsonData = JSON.parse(data);

    // Check if the request is for a specific user ID
    const { id } = req.query;
    if (id) {
      const user = jsonData.user.find((u) => u.id === id);
      if (user) {
        return res.status(200).json(user);
      } else {
        return res.status(404).json({ error: 'User not found' });
      }
    }

    // If no ID is provided, return all users
    res.status(200).json(jsonData.user);
  } catch (error) {
    console.error('Error reading db.json:', error);
    res.status(500).json({ error: 'Failed to read data' });
  }
};