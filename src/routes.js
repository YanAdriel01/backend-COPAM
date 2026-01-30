const { Router } = require("express");
const UserController = require("./Controllers/UserController");

const routes = Router();

//Users
routes.post('/users', UserController.create);
// routes.get('/users', UserController.read);
// routes.delete('/users:id', UserController.delete);


module.exports = routes