require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Inventory } = require('./models');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Get all inventory items
app.get('/api/inventory', async (req, res) => {
  try {
    const items = await Inventory.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch inventory items' });
  }
});

// Add a new inventory item
app.post('/api/inventory', async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const newItem = await Inventory.create({ name, quantity });
    res.json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add inventory item' });
  }
});

// Delete an inventory item
app.delete('/api/inventory/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Inventory.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete inventory item' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
