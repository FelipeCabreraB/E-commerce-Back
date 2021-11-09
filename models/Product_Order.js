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
    },
    {
      sequelize,
      modelName: "product_order",
    },
  );

  return Product_Order;
};
