const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Comment extends Model {
    static associate(models) {
      Comment.belongsTo(models.User, { foreignKey: "user_id" });
      Comment.belongsTo(models.Trail, { foreignKey: "trail_id" });
    }
  }

  Comment.init(
    {
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Comment",
      tableName: "comments",
    }
  );

  return Comment;
};
