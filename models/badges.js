/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('badges', {
    id_badge: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    badge_image: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    badge_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'badges',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_badge" },
        ]
      },
    ]
  });
};
