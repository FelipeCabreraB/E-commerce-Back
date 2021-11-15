const express = require("express");
const adminRouter = express.Router();
const adminProductController = require("../controllers/adminProductController");
const adminCategoryController = require("../controllers/adminCategoryController");

// Rutas del Admin:
// ...

adminRouter.get("/products", adminProductController.index);
adminRouter.get("/categories", adminCategoryController.index);

module.exports = adminRouter;
