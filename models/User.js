const bcrypt = require("bcryptjs");

module.exports = (sequelize, Model, DataTypes) => {
  class User extends Model {
    // async validatePassword(password) {
    //   return await bcrypt.compare(password, this.password); // Si son iguales returna true, sino false
    // }
  }

  User.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      firstname: {
        type: DataTypes.STRING,
      },
      lastname: {
        type: DataTypes.STRING,
      },
      mail: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.BIGINT.UNSIGNED,
      },
      completedOrders: {
        type: DataTypes.BIGINT.UNSIGNED,
      },
    },
    // {
    //   hooks: {
    //     beforeCreate: async (user, options) => {
    //       const hashedPassword = await bcrypt.hash(user.password, 10);
    //       user.password = hashedPassword;
    //     },
    //   },
    // },
    {
      sequelize,
      modelName: "user",
    },
  );

  return User;
};
