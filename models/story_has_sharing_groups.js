/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('story_has_sharing_groups', {
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
    id_story: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'story',
        key: 'id_story'
      }
    }
  }, {
    sequelize,
    tableName: 'story_has_sharing_groups',
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
        name: "fk_Sharing_Groups_has_Story_Sharing_Groups1",
        using: "BTREE",
        fields: [
          { name: "id_sharing_group" },
        ]
      },
      {
        name: "fk_Sharing_Groups_has_Story_Story1",
        using: "BTREE",
        fields: [
          { name: "id_story" },
        ]
      },
    ]
  });
};
