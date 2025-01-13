const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Trail extends Model {
    static associate(models) {
      Trail.hasMany(models.Comment, { foreignKey: "trail_id" });
    }
  }

  Trail.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      length: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      elevation: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
      },
      level: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      latitude: {
        type: DataTypes.DECIMAL(9, 6),
        allowNull: false,
      },
      longitude: {
        type: DataTypes.DECIMAL(9, 6),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Trail",
      tableName: "trails",
    }
  );

  return Trail;
};
