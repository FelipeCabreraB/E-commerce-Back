module.exports = (sequelize, Model, DataTypes) => {
  class Product extends Model {}

  Product.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      productName: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
      },
      origin: {
        type: DataTypes.STRING,
      },
      farm: {
        type: DataTypes.STRING,
      },
      notes: {
        type: DataTypes.STRING,
      },
      variety: {
        type: DataTypes.STRING,
      },
      height: {
        type: DataTypes.STRING,
      },
      process: {
        type: DataTypes.STRING,
      },
      rating: {
        type: DataTypes.DECIMAL(10, 0),
      },
      accessoriesChar1: {
        type: DataTypes.STRING,
      },
      accessoriesChar2: {
        type: DataTypes.STRING,
      },
      accessoriesChar3: {
        type: DataTypes.STRING,
      },
      picture: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.INTEGER,
      },
      stock: {
        type: DataTypes.INTEGER,
      },
      featured: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "product",
      paranoid: true,
      // If you want to give a custom name to the deletedAt column
      deletedAt: "destroyTime",
    },
  );

  return Product;
};
