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
        type: DataTypes.STRING,
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
        type: DataTypes.DECIMAL(10, 2),
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
    },
  );

  return Product;
};
