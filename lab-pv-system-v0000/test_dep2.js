const express = require('express');
const http = require('http');
const path = require('path');


const app = express();

const port = process.env.PORT || 11223;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app.use(express.static('dist/lab-pv-system'));
app.use(express.static(path.join(__dirname, 'dist/lab-pv-system')));

app.get('/pc-frontend', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, 'dist/lab-pv-system/index.html'));
});

app.get('/mobile-frontend', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, 'dist/lab-pv-system/index.html'));
});

const server = http.createServer(app);

server.listen(port, () => console.log('Running on port ', port));