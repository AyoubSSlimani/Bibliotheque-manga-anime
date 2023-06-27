const express = require('express');
const server = express();

server.get('/', (req, res) => {
    res.send('Hello World!');
})


const port = 3010;

server.listen(port, () => {
    console.log(`Serveur Express en cours d'exécution sur le port ${port}`)
})