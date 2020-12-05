/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('moments', {
    id_moment: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    moment_caption: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    moment_content_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: DataTypes.BLOB
    },
    moment_content_url: {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "file url that is stored in S3"
    },
    moment_thumbnail_url: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    id_user_created: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id_user'
      }
    },
    bg_light_color: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bg_dark_color: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_parent_moment: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Will implement this later(thread)"
    },
    is_comment_restricted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "0 = false ( all peeps can comment )\n1 = true ( only card members can respond, if it's in a card )"
    },
    moment_lattitude: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    moment_longitude: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    is_moment_NSFW: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "0 = false\n1 = true\n\nif a moment is NSFW and saved in a card then that card would also be declared as NSFW, though only after a certain number of  moments."
    },
    count_likes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    count_comment: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    count_save_to_card: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'moments',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_moment" },
        ]
      },
      {
        name: "id_user_created",
        using: "BTREE",
        fields: [
          { name: "id_user_created" },
        ]
      },
    ]
  });
};
