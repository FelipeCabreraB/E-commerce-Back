const express = require("express");
const adminRouter = express.Router();
const adminProductController = require("../controllers/adminProductController");
const adminCategoryController = require("../controllers/adminCategoryController");
const adminOrderController = require("../controllers/adminOrderController");
const adminUserController = require("../controllers/adminUserController");
const validateAdmin = require("../middlewares/validateAdmin");
const checkJwt = require("express-jwt");

//----- Rutas del Admin -----:
adminRouter.get(
  "/users/:page",
  checkJwt({ secret: process.env.APP_JWT_SECRET, algorithms: ["HS256"] }),
  validateAdmin,
  adminUserController.index,
);
adminRouter.get(
  "/user/:userId",
  checkJwt({ secret: process.env.APP_JWT_SECRET, algorithms: ["HS256"] }),
  validateAdmin,
  adminUserController.show,
);
adminRouter.post(
  "/users",
  checkJwt({ secret: process.env.APP_JWT_SECRET, algorithms: ["HS256"] }),
  validateAdmin,
  adminUserController.store,
);
adminRouter.patch(
  "/users",
  checkJwt({ secret: process.env.APP_JWT_SECRET, algorithms: ["HS256"] }),
  validateAdmin,
  adminUserController.update,
);
adminRouter.delete(
  "/users",
  checkJwt({ secret: process.env.APP_JWT_SECRET, algorithms: ["HS256"] }),
  validateAdmin,
  adminUserController.destroy,
);

//----- Product Routes -----:
adminRouter.get(
  "/products/:page",
  checkJwt({ secret: process.env.APP_JWT_SECRET, algorithms: ["HS256"] }),
  validateAdmin,
  adminProductController.index,
);
adminRouter.get(
  "/product/:productId",
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

//----- Category Routes -----:
adminRouter.get(
  "/categories",
  checkJwt({ secret: process.env.APP_JWT_SECRET, algorithms: ["HS256"] }),
  validateAdmin,
  adminCategoryController.index,
);
adminRouter.get(
  "/categories/:categoryId",
  checkJwt({ secret: process.env.APP_JWT_SECRET, algorithms: ["HS256"] }),
  validateAdmin,
  adminCategoryController.show,
);
adminRouter.post(
  "/categories",
  checkJwt({ secret: process.env.APP_JWT_SECRET, algorithms: ["HS256"] }),
  validateAdmin,
  adminCategoryController.store,
);
adminRouter.patch(
  "/categories",
  checkJwt({ secret: process.env.APP_JWT_SECRET, algorithms: ["HS256"] }),
  validateAdmin,
  adminCategoryController.update,
);
adminRouter.delete(
  "/categories",
  checkJwt({ secret: process.env.APP_JWT_SECRET, algorithms: ["HS256"] }),
  validateAdmin,
  adminCategoryController.destroy,
);

adminRouter.patch(
  "/orders",
  checkJwt({ secret: process.env.APP_JWT_SECRET, algorithms: ["HS256"] }),
  validateAdmin,
  adminOrderController.update,
);

adminRouter.get(
  "/orders/:page",
  checkJwt({ secret: process.env.APP_JWT_SECRET, algorithms: ["HS256"] }),
  validateAdmin,
  adminOrderController.index,
);

module.exports = adminRouter;
