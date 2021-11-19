module.exports = (sequelize, Model, DataTypes) => {
  class Category extends Model {}

  Category.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      categoryName: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      picture: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "category",
      paranoid: true,
      // If you want to give a custom name to the deletedAt column
      deletedAt: "destroyTime",
    },
  );

  return Category;
};
