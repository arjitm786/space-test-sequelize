/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('post_actions', {
    id_post_action: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_post: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Either Story Id or Moment ID (Referencing Parent)."
    },
    action_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "0 = Like\n1 = Mentions\n2 = Save To Card\n3 = Send as Message"
    },
    id_action_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id_user'
      }
    },
    post_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "0 = story\n1 = moment"
    }
  }, {
    sequelize,
    tableName: 'post_actions',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_post_action" },
        ]
      },
      {
        name: "id_action_user",
        using: "BTREE",
        fields: [
          { name: "id_action_user" },
        ]
      },
    ]
  });
};
