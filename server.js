'use strict';
const express = require('express');
const app = express();

app.use(express.static("public"));

app.use('/imgs', express.static(__dirname + '/imgs'));
app.get('/', function (req, res){
    res.type('text');
    res.send('Hello World from a node server!');
});

const PORT = process.env.PORT || 80;
app.listen(PORT);
console.log(PORT);
