const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('HEY THERE');
})

app.get('/first-route', (req, res) => {
    res.send('HEY THERE I AM CHECKING THE FIRST ROUTE');
})

app.post('/second-route', (req, res) => {
    res.send('LETS CHECK THE SECOND ROUTE WITH A POST REQUEST');
})

module.exports = app;
