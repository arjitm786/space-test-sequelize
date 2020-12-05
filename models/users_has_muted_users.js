/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users_has_muted_users', {
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id_user'
      }
    },
    id_muted_users: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'muted_users',
        key: 'id_muted_user'
      }
    }
  }, {
    sequelize,
    tableName: 'users_has_muted_users',
    timestamps: false,
    indexes: [
      {
        name: "fk_Users_has_Muted_Users_Muted_Users1",
        using: "BTREE",
        fields: [
          { name: "id_muted_users" },
        ]
      },
      {
        name: "fk_Users_has_Muted_Users_Users1",
        using: "BTREE",
        fields: [
          { name: "id_user" },
        ]
      },
    ]
  });
};
