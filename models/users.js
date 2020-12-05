/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id_user: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    phone_no: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    user_lattitude: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    is_email_verified: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    password: {
      type: DataTypes.STRING(45),
      allowNull: false,
      comment: "Salted"
    },
    is_user_verified: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "0- Not Active\n1- Active"
    },
    user_account_status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "0- Healthy\n1- Shadow Ban\n2- Temporary Ban\n3- Locked\n4- PermaBan\n5- Delete ( by user )\n\n\/\/ For feed system"
    },
    id_user_status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Status that will be set on message screen & will be visible to other user while chatting"
    },
    is_reported: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "0 - false\n1- True\n\nUsed to figure out whether we need to remove certain posts from feed."
    },
    is_private: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "0 - False (Public)\n1 - True (Private)"
    },
    is_alias: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "0 - False (always when public)\n1 - True"
    },
    is_social_account: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "0 = false\n1 = true"
    },
    user_looking_for: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "null = Unspecified\n0 = male\n1 = female"
    },
    user_last_known_ip: {
      type: DataTypes.STRING(45),
      allowNull: false,
      comment: "What would be the right datatype to store IP address of a user"
    },
    user_longitude: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    count_followers: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    count_followings: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    count_spaces: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    count_interests: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    is_account_active: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "0 = false\n1 = true\n\n Used to query users who are not blocked by system"
    },
    salt: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_user" },
        ]
      },
    ]
  });
};
