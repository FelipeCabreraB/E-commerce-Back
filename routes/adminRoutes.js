const express = require("express");
const adminRouter = express.Router();
const adminProductController = require("../controllers/adminProductController");
const adminCategoryController = require("../controllers/adminCategoryController");
const adminOrderController = require("../controllers/adminOrderController");
const adminUserController = require("../controllers/adminUserController")

// Rutas del Admin:
// ...

adminRouter.get("/products", adminProductController.index);
adminRouter.get("/categories", adminCategoryController.index);
adminRouter.get("/orders", adminOrderController.index);
adminRouter.get("/users", adminUserController.index);


module.exports = adminRouter;
