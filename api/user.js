const path = require('path');
const fs = require('fs/promises');

module.exports = async (req, res) => {
  try {
    const data = await fs.readFile('db.json', 'utf-8');
    const jsonData = JSON.parse(data);
    res.status(200).json(jsonData.user);
  } catch (error) {
    console.error('Error reading db.json:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};