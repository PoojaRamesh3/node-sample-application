module.exports = (sequelize, DataTypes, Model) => {
  class Tasks extends Model {}

  Tasks.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      createdate: {
        type: DataTypes.DATE,
      },
      updateddate: {
        type: DataTypes.DATE,
      },
      createdby: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      updatedby: {
        type: DataTypes.STRING,
      },
    },
    {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: "tasks", // We need to choose the model name
    }
  );

  return Tasks;
};
