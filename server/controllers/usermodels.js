const UserModel = require('../models').UserModel;

module.exports = {
  create(req, res) {
    return UserModel
      .create({
        name: req.body.name,
      })
      .then(usermodel => res.status(201).send(usermodel))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return UserModel
      .all()
      .then(usermodels => res.status(200).send(usermodels))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return UserModel
      .findById(req.params.userId)
      .then(usermodel => {
        if (!usermodel) {
          return res.status(404).send({
            message: 'UserModel Not Found',
          });
        }
        return res.status(200).send(usermodel);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return UserModel
      .findById(req.params.userId)
      .then(usermodel => {
        if (!usermodel) {
          return res.status(404).send({
            message: 'UserModel Not Found',
          });
        }
        return usermodel
          .update({
            name: req.body.name || usermodel.name,
          })
          .then(() => res.status(200).send(usermodel))  // Send back the updated usermodel.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return UserModel
      .findById(req.params.userId)
      .then(usermodel => {
        if (!usermodel) {
          return res.status(400).send({
            message: 'UserModel Not Found',
          });
        }
        return usermodel
         .destroy()
         .then(() => res.status(200).send({ message: 'UserModel deleted successfully.' }))
         .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
