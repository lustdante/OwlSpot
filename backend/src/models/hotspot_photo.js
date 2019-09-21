module.exports = (sequelize, DataTypes) =>
  sequelize.define('hotspot_photos', {
    hotspotId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'hotspot_id',
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
