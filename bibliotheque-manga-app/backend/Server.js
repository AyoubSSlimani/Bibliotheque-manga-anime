const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
// const NodeCache = require('node-cache');
const cors = require('cors');
const morgan = require('morgan');

const server = express();
const port = process.env.SERVER_PORT || 3010;

// const cache = new NodeCache();

server.use(morgan('combined'));
// Utilisation du middleware CORS Pour empêcher une ERREUR
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true}));

server.use(express.static('build'));

let cardData = [];
//POST
server.post('/MaCollection', (req, res) => {
  try {
    const newCard = req.body;
    if (cardData.find(card => card.mal_id === newCard.mal_id)) {
      console.log(`Carte ${newCard.title} déjà présente dans votre collection.`);
      res.status(200).json({ message: `Carte déjà présente dans votre collection.` });
    } else {
      cardData.push(newCard);
      console.log(`Carte ${newCard.title}, mal_id:${newCard.mal_id} reçue avec succès`);
      res.status(200).json({ message: `Carte reçue avec succès` });
    }
  } catch (error) {
    console.error('Une erreur s\'est produite lors du traitement de la requête POST :', error);
    res.sendStatus(500); // Envoyer une réponse d'erreur au client
  }
});



//GET
server.get('/MaCollection', (req, res) => {
  try {
    if (cardData) {
      res.send(cardData);
    } else {
      res.status(404).send('Aucune carte n\'a été ajoutée');
    }
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la RECUPERATION des données :', error);
    res.status(500).send('Erreur lors de la récupération des données');
  }
});

//DELETE
server.delete('/MaCollection', (req, res) => {
  const cardId = req.body;
  try {
    cardData = cardData.filter(carte => carte.mal_id === cardId);
    res.status(200).json({ message: `Carte supprimée avec succès` });
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la SUPPRESSION des données :', error);
    res.status(404).json({ message: 'Erreur lors de la suppression de la carte'});
  }
})




server.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});

module.exports = server;