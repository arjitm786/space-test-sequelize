/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('space', {
    id_space: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    space_creator_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    space_title: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    space_desc: {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "bio"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_space_private: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0 = false\n1 = true"
    },
    is_space_NSFW: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "0 = false\n1 = true"
    },
    space_cover_image_url: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    space_cover_thumbnail_url: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    is_space_locked: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: DataTypes.BLOB
    },
    space_lattitude: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    space_longitude: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    count_story: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    count_moments: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    count_members: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
      comment: "As creator will be counted as a member too... Obviously"
    }
  }, {
    sequelize,
    tableName: 'space',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_space" },
        ]
      },
    ]
  });
};
