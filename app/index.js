const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`Hello World from Port ${port}`);
});

app.listen(3000, () =>{
    console.info(`Database is running on port ${port}`);
});

app.get('/myname', (req, res) => {
    const name = 'Jesús García Santiago'; // Reemplaza 'Tu Nombre' por tu nombre real
    res.send(`Hello World! My name is ${name}.`);
  });