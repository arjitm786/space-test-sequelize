/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comment_like', {
    id_comment_like: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_post_comment: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'post_comments',
        key: 'id_post_comment'
      }
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "User who liked this comment",
      references: {
        model: 'story',
        key: 'id_story'
      }
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'comment_like',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_comment_like" },
        ]
      },
      {
        name: "fk_id_post_comment",
        using: "BTREE",
        fields: [
          { name: "id_post_comment" },
        ]
      },
      {
        name: "comment_fk_id_user",
        using: "BTREE",
        fields: [
          { name: "id_user" },
        ]
      },
    ]
  });
};
