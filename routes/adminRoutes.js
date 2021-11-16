const express = require("express");
const adminRouter = express.Router();
const adminProductController = require("../controllers/adminProductController");
const adminCategoryController = require("../controllers/adminCategoryController");
const adminOrderController = require("../controllers/adminOrderController");
const adminUserController = require("../controllers/adminUserController");

// Rutas del Admin:

// Product Routes
adminRouter.get("/products", adminProductController.index);
adminRouter.get("/product/:productId", adminProductController.show);
adminRouter.patch("/product/update", adminProductController.update);
adminRouter.delete("/product/delete", adminProductController.destroy);

//Category Routes
adminRouter.get("/categories", adminCategoryController.index);
adminRouter.get("/orders", adminOrderController.index);
adminRouter.get("/users", adminUserController.index);

module.exports = adminRouter;
