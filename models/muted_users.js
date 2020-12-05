/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('muted_users', {
    id_muted_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'id_user'
      }
    },
    id_user_who_muted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id_user'
      }
    },
    id_user_muted_by: {
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
    },
    muted_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Null = Profile\n0 = story\n1 = cards\n2… other stuff"
    }
  }, {
    sequelize,
    tableName: 'muted_users',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_muted_user" },
        ]
      },
      {
        name: "id_user_who_muted",
        using: "BTREE",
        fields: [
          { name: "id_user_who_muted" },
        ]
      },
    ]
  });
};
