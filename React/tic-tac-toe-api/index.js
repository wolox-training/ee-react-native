const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3005;
const isAuthorized = req => router.db.get('users').find({ token: req.headers.authorization }).value();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  // Handle auth for creating matches
  if (req.method == 'POST' && req.path == '/matches' && !isAuthorized(req)) {
    res.sendStatus(401);
  } else {
    next();
  }
})

server.use((req, res, next) => {
  // Handle login
  if (req.method == 'POST' && req.path == '/login') {
    const user = router.db.get('users').find({ email: req.body.email, password: req.body.password }).value();
    if (user) {
      res.status(200).send({ token: user.token });
    } else {
      res.sendStatus(401);
    }
    return;
  }

  // Add createdAt to resources
  if (req.method === 'POST') {
    req.body.createdAt = new Date().toISOString();
  }

  // Continue to JSON Server router
  next();
})

server.use(router);
server.listen(port, () => {
  console.log('Tic Tac Toe API is running on port:', port);
});
