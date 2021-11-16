const express = require("express");
const adminRouter = express.Router();
const adminProductController = require("../controllers/adminProductController");
const adminCategoryController = require("../controllers/adminCategoryController");
const adminOrderController = require("../controllers/adminOrderController");
const adminUserController = require("../controllers/adminUserController");
const validateAdmin = require("../middlewares/validateAdmin");
const checkJwt = require("express-jwt");

// Rutas del Admin:

// Product Routes
adminRouter.get(
  "/products",
  checkJwt({ secret: process.env.APP_JWT_SECRET, algorithms: ["HS256"] }),
  validateAdmin,
  adminProductController.index,
);
adminRouter.get(
  "/products/:productId",
  checkJwt({ secret: process.env.APP_JWT_SECRET, algorithms: ["HS256"] }),
  validateAdmin,
  adminProductController.show,
);
adminRouter.post(
  "/products",
  checkJwt({ secret: process.env.APP_JWT_SECRET, algorithms: ["HS256"] }),
  validateAdmin,
  adminProductController.store,
);
adminRouter.patch(
  "/products",
  checkJwt({ secret: process.env.APP_JWT_SECRET, algorithms: ["HS256"] }),
  validateAdmin,
  adminProductController.update,
);
adminRouter.delete(
  "/products",
  checkJwt({ secret: process.env.APP_JWT_SECRET, algorithms: ["HS256"] }),
  validateAdmin,
  adminProductController.destroy,
);

//Category Routes
adminRouter.get("/categories", adminCategoryController.index);
adminRouter.get("/categories/:categoryId", adminCategoryController.show);
adminRouter.post("/categories", adminCategoryController.store);
adminRouter.patch("/categories", adminCategoryController.update);
adminRouter.delete("/categories", adminCategoryController.destroy);

adminRouter.get("/orders", adminOrderController.index);
adminRouter.get("/users", adminUserController.index);

module.exports = adminRouter;
