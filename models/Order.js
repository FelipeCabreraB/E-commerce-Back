module.exports = (sequelize, Model, DataTypes) => {
  class Order extends Model {}

  Order.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      user: {
        type: DataTypes.BIGINT.UNSIGNED,
      },
      itemList: {
        type: DataTypes.STRING,
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
      statusOrder: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Order",
    },
  );

  return Order;
};
