const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({ static: './build' }); // disable public issues


// middlewares
server.use(middlewares);

// routes
server.use(router);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
})