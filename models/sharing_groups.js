/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sharing_groups', {
    id_sharing_group: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sharing_group_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    id_creator_user: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sharing_groups',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_sharing_group" },
        ]
      },
    ]
  });
};
