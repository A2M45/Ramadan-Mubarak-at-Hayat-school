const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// Middleware pour servir les fichiers statiques
app.use(express.static('public'));

// Route pour les heures de prière
app.get('/api/prayer-times', (req, res) => {
  const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
  res.json(data.prayerTimes);
});

// Route pour les mosquées
app.get('/api/mosques', (req, res) => {
  const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
  res.json(data.mosques);
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
