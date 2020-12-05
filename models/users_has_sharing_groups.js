/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users_has_sharing_groups', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_sharing_group: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'sharing_groups',
        key: 'id_sharing_group'
      }
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id_user'
      }
    }
  }, {
    sequelize,
    tableName: 'users_has_sharing_groups',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "fk_Users_has_Sharing_Groups_Users1",
        using: "BTREE",
        fields: [
          { name: "id_user" },
        ]
      },
      {
        name: "fk_Users_has_Sharing_Groups_Sharing_Groups1",
        using: "BTREE",
        fields: [
          { name: "id_sharing_group" },
        ]
      },
    ]
  });
};
