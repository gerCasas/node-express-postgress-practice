const userModelsController = require('../controllers').usermodels;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Users API!',
  }));

  app.post('/api/users', userModelsController.create);
  app.get('/api/users', userModelsController.list);
  app.get('/api/users/:userId', userModelsController.retrieve);
  app.put('/api/users/:userId', userModelsController.update);
  app.delete('/api/users/:userId', userModelsController.destroy);

};
