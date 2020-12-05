/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('story', {
    id_story: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_user_created: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    caption: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    bg_light_color: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bg_dark_color: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_story_private: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    is_group_selected: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    id_story_parent: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    story_content_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: DataTypes.BLOB
    },
    story_content_url: {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "file url from s3"
    },
    story_thumbnail_url: {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: DataTypes.BLOB
    },
    slug_story_link: {
      type: DataTypes.STRING(45),
      allowNull: false,
      comment: "Create user friendly URLs"
    },
    is_story_active: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "0 = false\n1 = true\nactivated for 24 hours"
    },
    story_lattitude: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    story_longitude: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    is_story_NSFW: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "0 = false \n1 = true"
    },
    count_like: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    count_save_to_space: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'story',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_story" },
        ]
      },
    ]
  });
};
