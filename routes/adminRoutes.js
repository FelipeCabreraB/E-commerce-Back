const express = require("express");
const adminRouter = express.Router();
const adminProductController = require("../controllers/adminProductController");
const adminCategoryController = require("../controllers/adminCategoryController");
const adminOrderController = require("../controllers/adminOrderController");
const adminUserController = require("../controllers/adminUserController");

// Rutas del Admin:

// Product Routes
adminRouter.get("/products", adminProductController.index);
adminRouter.get("/products/:productId", adminProductController.show);
adminRouter.post("/products", adminProductController.store);
adminRouter.patch("/products", adminProductController.update);
adminRouter.delete("/products", adminProductController.destroy);

//Category Routes
adminRouter.get("/categories", adminCategoryController.index);
adminRouter.get("/categories/:categoryId", adminCategoryController.show);
adminRouter.post("/categories", adminCategoryController.store);
adminRouter.patch("/categories", adminCategoryController.update);
adminRouter.delete("/categories", adminCategoryController.destroy);

adminRouter.get("/orders", adminOrderController.index);
adminRouter.get("/users", adminUserController.index);

module.exports = adminRouter;
