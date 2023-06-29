const express = require('express');
const axios = require('axios');
const NodeCache = require('node-cache');
const cors = require('cors');

const server = express();
const port = 3010;

const cache = new NodeCache();

// Utilisation du middleware CORS Pour empêcher une ERREUR
server.use(cors());

server.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
