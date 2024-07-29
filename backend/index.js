// index.js (backend)
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Importa cors

const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Middleware CORS
app.use(cors()); // Permite todas las solicitudes CORS

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/urlshortener', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Definición del esquema y modelo de URL
const urlSchema = new mongoose.Schema({
  originalUrl: String,
  shortUrl: String,
});

const Url = mongoose.model('Url', urlSchema);

// Ruta para acortar la URL
app.post('/shorten', async (req, res) => {
  const { originalUrl } = req.body;
  const shortUrl = generateShortUrl();
  const newUrl = new Url({ originalUrl, shortUrl });

  await newUrl.save();
  res.json({ originalUrl, shortUrl });
});

// Ruta para redireccionar a la URL original
app.get('/:shortUrl', async (req, res) => {
  const { shortUrl } = req.params;
  const url = await Url.findOne({ shortUrl });

  if (url) {
    res.redirect(url.originalUrl);
  } else {
    res.status(404).json({ error: 'URL no encontrada' });
  }
});

// Función para generar un código corto (puedes mejorarla)
function generateShortUrl() {
  return Math.random().toString(36).substring(7);
}

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
