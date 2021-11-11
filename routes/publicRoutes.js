const express = require("express");
const publicRouter = express.Router();
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const checkJwt = require("express-jwt");

// Rutas del Públicas:
// ...

// Users

publicRouter.post("/login", authController.login);
publicRouter.post("/register", userController.create);

module.exports = publicRouter;
