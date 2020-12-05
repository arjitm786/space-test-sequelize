/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('story_has_interests', {
    id_story: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_interest: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'story_has_interests',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_story" },
          { name: "id_interest" },
        ]
      },
    ]
  });
};
