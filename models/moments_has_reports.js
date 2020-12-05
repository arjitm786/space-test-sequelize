/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('moments_has_reports', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_moment: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'moments',
        key: 'id_moment'
      }
    },
    id_content_report: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'content_reports',
        key: 'id_content_report'
      }
    }
  }, {
    sequelize,
    tableName: 'moments_has_reports',
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
        name: "fk_Moments_has_Content_Reports_Content_Reports1",
        using: "BTREE",
        fields: [
          { name: "id_content_report" },
        ]
      },
      {
        name: "fk_Moments_has_Content_Reports_Moments1",
        using: "BTREE",
        fields: [
          { name: "id_moment" },
        ]
      },
    ]
  });
};
