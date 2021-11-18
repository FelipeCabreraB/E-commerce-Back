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

publicRouter.get(
  "/user/:userId",
  checkJwt({ secret: process.env.APP_JWT_SECRET, algorithms: ["HS256"] }),
  userController.show,
);
publicRouter.patch(
  "/users",
  checkJwt({ secret: process.env.APP_JWT_SECRET, algorithms: ["HS256"] }),
  userController.update,
);

//Products

publicRouter.get("/products/:categoryId", productController.index);
publicRouter.get("/featured/products", productController.indexFeatured);
publicRouter.get("/product/:productName", productController.show);

module.exports = publicRouter;
