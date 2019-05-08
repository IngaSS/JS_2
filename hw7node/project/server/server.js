//в экспрессе мы получаем особые методы отлова запросов
//
// app.get();
// app.post();
// app.put();
// app.delete();


const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json ());//определение json запроса
app.use('/', express.static('public'));

app.get('/api/products', (req, res) => {
    fs.readFile('server/db/products.json', 'utf8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({result: 0, text: err}));
        } else {
            res.send(data);
        }
    });
});

app.get('/api/cart', (req, res) => {
    fs.readFile('server/db/userCart.json', 'utf8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({result: 0, text: err}));
        } else {
            res.send(data);
        }
    });
});

const handler = require('./handler');

app.post ('/api/cart/', (req, res) => {
    handler(req, res, 'add', 'server/db/userCart.json');
});

app.put ('/api/cart/:id', (req, res) => {
    handler(req, res, 'change', 'server/db/userCart.json');
});

app.delete ('/api/cart/:id', (req, res) => {
    handler(req, res, 'remove', 'server/db/userCart.json');
});


app.listen(3000, () => ('listening at port 3000...'));



