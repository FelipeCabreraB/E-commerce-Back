const publicRoutes = require("./publicRoutes");
const adminRoutes = require("./adminRoutes");

module.exports = (app) => {
  app.use("/api", publicRoutes);
  app.use("/api/admin", adminRoutes);
};
