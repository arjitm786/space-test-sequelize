/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('post_comments_has_interests', {
    id_post_comment: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_interest: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'post_comments_has_interests',
    timestamps: false
  });
};
