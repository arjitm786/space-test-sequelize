/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('post_comments', {
    id_post_comment: {
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
    post_comment_content: {
      type: DataTypes.STRING(45),
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
    id_parent_post_comment: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "null or -1 if there's no parent comment"
    },
    mentioned_user: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "\/\/ By default - Mentioned user of a replied comment will be the user of parent comment."
    }
  }, {
    sequelize,
    tableName: 'post_comments',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_post_comment" },
        ]
      },
      {
        name: "id_user",
        using: "BTREE",
        fields: [
          { name: "id_user" },
        ]
      },
    ]
  });
};
