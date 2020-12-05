/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('content_reports', {
    id_content_report: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_user_who_reported: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "User who reported"
    },
    id_user_whose_content: {
      type: DataTypes.INTEGER,
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
    report_category: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0 = other\n1… Other categories\n \nwill create this category table"
    },
    reported_reason: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    report_content_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "0 = Story\n1 = Moment\n2 = Card"
    }
  }, {
    sequelize,
    tableName: 'content_reports',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_content_report" },
        ]
      },
    ]
  });
};
