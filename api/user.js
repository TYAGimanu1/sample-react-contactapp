const path = require('path');
const fs = require('fs/promises');

module.exports = async (req, res) => {
  const dbPath = path.join(__dirname, '..', 'db.json');
  try {
    const data = await fs.readFile(dbPath, 'utf-8');
    const jsonData = JSON.parse(data);
    res.status(200).json(jsonData.user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read data' });
  }
};