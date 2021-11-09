const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE, // Ej: hack_academy_db
  process.env.DB_USERNAME, // Ej: root
  process.env.DB_PASSWORD, // Ej: root
  {
    host: process.env.DB_HOST, // Ej: 127.0.0.1
    dialect: process.env.DB_CONNECTION, // Ej: mysql
    logging: false, // Para que no aparezcan mensajes en consola.
  },
);

const User = require("./User")(sequelize, Model, DataTypes);
const Product = require("./Product")(sequelize, Model, DataTypes);
const Order = require("./Order")(sequelize, Model, DataTypes);
const Admin = require("./Admin")(sequelize, Model, DataTypes);
const Category = require("./Category")(sequelize, Model, DataTypes);
const Product_Order = require("./Product_Order")(sequelize, Model, DataTypes);

// Luego de definir los modelos, se pueden establecer relaciones
// entre los mismos...

Category.hasMany(Product);
Product.belongsTo(Category);

Order.belongsTo(User);
User.hasMany(Order);

Product.belongsToMany(Order, { through: Product_Order });
Order.belongsToMany(Product, { through: Product_Order });

module.exports = {
  sequelize,
  User,
  Product,
  Order,
  Admin,
  Category,
  Product_Order,
};
