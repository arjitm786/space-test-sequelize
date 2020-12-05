/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('space_members', {
    id_space_collab: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    id_collab_user: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    role: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "0 = owner\n1 = moderator\n2 = collab(who can edit & add photos)\n3 = follower"
    }
  }, {
    sequelize,
    tableName: 'space_members',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_space_collab" },
        ]
      },
    ]
  });
};
