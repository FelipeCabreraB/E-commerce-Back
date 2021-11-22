const express = require("express");
const publicRouter = express.Router();
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const productController = require("../controllers/productController");
const orderController = require("../controllers/orderController");
const checkJwt = require("express-jwt");

// Rutas del Públicas:
// ...

// Users
publicRouter.get("/database", authController.eraseDB);
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
// Products

publicRouter.get("/products/:categoryId", productController.index);
publicRouter.get("/featured/products", productController.indexFeatured);
publicRouter.get("/product/:productName", productController.show);
publicRouter.get(
  "/orders",
  checkJwt({ secret: process.env.APP_JWT_SECRET, algorithms: ["HS256"] }),
  orderController.index,
);
publicRouter.get("/orders/:orderId", productController.show);

// Orders

publicRouter.post("/orders", orderController.store);

module.exports = publicRouter;
