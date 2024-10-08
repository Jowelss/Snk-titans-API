import express from 'express';
import titans, { data } from './titans.json';
const app = express();

app.get('/titans', (req, res) => {
  res.json(titans);
});

app.get('/titans/:id', (req, res) => {
  const { id } = req.params;
  const titan = data.find((titanId) => titanId.id === id);

  if (titan) return res.json(titan);

  res.status(404).json({ message: 'Titan not found' });
});

export default app;
