const express = require("express");
const publicRouter = express.Router();
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const productController = require("../controllers/productController");
const orderController = require("../controllers/orderController");

// Rutas del Públicas:
// ...

// Users

publicRouter.post("/login", authController.login);
publicRouter.post("/register", userController.create);

// Products

publicRouter.get("/products/:categoryId", productController.index);
publicRouter.get("/featured/products", productController.indexFeatured);
publicRouter.get("/product/:productName", productController.show);

publicRouter.get("/orders/:orderId", productController.show);

// Orders

publicRouter.post("/orders", orderController.store);

module.exports = publicRouter;
