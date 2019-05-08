let products = [{"product_name": "Мышка", "price": 100}]

const http = require ('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Hello');
        res.end();
    }

    if(req.url === '/products') {
        res.write(JSON.stringify(products));
        res.end();
    }
})

server.listen(3000);
server.on('connection', (socket) => {
    console.log('New connection')
});

console.log('server listen at port 3000...');