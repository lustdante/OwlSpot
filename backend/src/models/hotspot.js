module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    'hotspots',
    {
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      lat: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      lng: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      indexes: [
        {
          fields: ['name'],
        },
      ],
    },
  );
