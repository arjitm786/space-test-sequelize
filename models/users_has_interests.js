/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users_has_interests', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id_user'
      }
    },
    id_interest: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'interests',
        key: 'id_interest'
      }
    }
  }, {
    sequelize,
    tableName: 'users_has_interests',
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
        name: "fk_id_user",
        using: "BTREE",
        fields: [
          { name: "id_user" },
        ]
      },
      {
        name: "fk_id_interest",
        using: "BTREE",
        fields: [
          { name: "id_interest" },
        ]
      },
    ]
  });
};
