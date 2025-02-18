const express = require('express');
const path = require('path');
const app = express();

// Servir les fichiers statiques (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Route principale qui envoie index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Définir le port (utilise un port par défaut si la variable d'environnement n'est pas définie)
const port = process.env.PORT || 3001; // Changer le port à 3001
 // Utilisation du port 3000 par défaut si PORT n'est pas défini

// Lancer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
