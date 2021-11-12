module.exports = (sequelize, Model, DataTypes) => {
  class Product_Order extends Model {}

  Product_Order.init(
    {
      quantity: {
        type: DataTypes.INTEGER,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
      },
      grindingType: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "product_order",
    },
  );

  return Product_Order;
};
