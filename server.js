const express = require('express');
const {SERVER_PORT} = require('./consts');
const {convertAncientsToHtml, fetchAncients} = require('./ancients');

const app = express();
app.set('view engine', 'pug');

app.get('/app', (req, res) => {
    res.sendFile('index.html', {root: './dist'});
});

let ancientsHtml;
app.get('/', (req, res) => {
    res.render('index', {ancients: ancientsHtml});
});

app.use(express.static('dist'));

app.listen(SERVER_PORT, async () => {
    console.log(`server listening at http://localhost:${SERVER_PORT}`);
    ancientsHtml = convertAncientsToHtml(await fetchAncients());
});