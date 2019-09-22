module.exports = (sequelize, DataTypes) =>
  sequelize.define('hotspot_photos', {
    hotspotId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'hotspot_id',
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
