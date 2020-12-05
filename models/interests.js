/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('interests', {
    id_interest: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    interest: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    counter: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Increment when this interest is being used anywhere"
    }
  }, {
    sequelize,
    tableName: 'interests',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_interest" },
        ]
      },
    ]
  });
};
