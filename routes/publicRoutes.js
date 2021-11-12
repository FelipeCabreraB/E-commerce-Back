const express = require("express");
const publicRouter = express.Router();
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const productController = require("../controllers/productController");
const checkJwt = require("express-jwt");

// Rutas del Públicas:
// ...

// Users

publicRouter.post("/login", authController.login);
publicRouter.post("/register", userController.create);

//Products

publicRouter.get("/products/:categoryId", productController.index);
publicRouter.get("/product/:productName", productController.show);

module.exports = publicRouter;
