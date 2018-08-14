const express = require('express');
const {SERVER_PORT} = require('./consts');
const {convertAncientsToHtml, fetchAncients} = require('./ancients');

const app = express();
app.set('view engine', 'pug');

app.get('/search', (req, res) => {
    res.sendFile('search.html', {root: './lib/'});
});

let ancientsHtml;
app.get('/', (req, res) => {
    res.render('index', {ancients: ancientsHtml});
});

app.listen(SERVER_PORT, async () => {
    ancientsHtml = convertAncientsToHtml(await fetchAncients());
});