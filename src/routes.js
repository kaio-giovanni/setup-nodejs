const routes = require('express').Router();

const UserController = require('./controllers/UserController');

routes.get('/', (req, res) => {
  return res.status(200).send({
    message: 'Hello World',
  });
});

routes.post('/session', UserController.store);

module.exports = routes;
