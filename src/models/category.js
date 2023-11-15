"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Category.init(
    {
      code: DataTypes.STRING,
      value: {
        type: DataTypes.STRING,
        set(value) {
          this.setDataValue(
            "value",
            value
              .split(" ")
              .map((item) => {
                return item[0].toUpperCase() + item.slice(1);
              })
              .join(" ")
          );
        },
      },
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
