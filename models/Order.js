module.exports = (sequelize, Model, DataTypes) => {
  class Order extends Model {}

  Order.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },

      statusOrder: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "order",
    },
  );

  return Order;
};
