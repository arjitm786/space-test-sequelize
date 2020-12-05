var DataTypes = require("sequelize").DataTypes;
var __evolutions = require("./_evolutions");
var _alias_profile = require("./alias_profile");
var _badges = require("./badges");
var _comment_like = require("./comment_like");
var _content_reports = require("./content_reports");
var _followers = require("./followers");
var _interests = require("./interests");
var _moments = require("./moments");
var _moments_has_reports = require("./moments_has_reports");
var _muted_users = require("./muted_users");
var _post_actions = require("./post_actions");
var _post_comments = require("./post_comments");
var _post_comments_has_interests = require("./post_comments_has_interests");
var _post_likes = require("./post_likes");
var _profile = require("./profile");
var _restricted_users = require("./restricted_users");
var _sessions = require("./sessions");
var _sharing_groups = require("./sharing_groups");
var _space = require("./space");
var _space_has_interests = require("./space_has_interests");
var _space_has_members = require("./space_has_members");
var _space_has_reports = require("./space_has_reports");
var _space_members = require("./space_members");
var _story = require("./story");
var _story_has_interests = require("./story_has_interests");
var _story_has_reports = require("./story_has_reports");
var _story_has_sharing_groups = require("./story_has_sharing_groups");
var _story_has_space = require("./story_has_space");
var _user_social_accounts = require("./user_social_accounts");
var _user_status = require("./user_status");
var _users = require("./users");
var _users_has_badges = require("./users_has_badges");
var _users_has_interests = require("./users_has_interests");
var _users_has_muted_users = require("./users_has_muted_users");
var _users_has_sharing_groups = require("./users_has_sharing_groups");

function initModels(sequelize) {
  var _evolutions = __evolutions(sequelize, DataTypes);
  var alias_profile = _alias_profile(sequelize, DataTypes);
  var badges = _badges(sequelize, DataTypes);
  var comment_like = _comment_like(sequelize, DataTypes);
  var content_reports = _content_reports(sequelize, DataTypes);
  var followers = _followers(sequelize, DataTypes);
  var interests = _interests(sequelize, DataTypes);
  var moments = _moments(sequelize, DataTypes);
  var moments_has_reports = _moments_has_reports(sequelize, DataTypes);
  var muted_users = _muted_users(sequelize, DataTypes);
  var post_actions = _post_actions(sequelize, DataTypes);
  var post_comments = _post_comments(sequelize, DataTypes);
  var post_comments_has_interests = _post_comments_has_interests(sequelize, DataTypes);
  var post_likes = _post_likes(sequelize, DataTypes);
  var profile = _profile(sequelize, DataTypes);
  var restricted_users = _restricted_users(sequelize, DataTypes);
  var sessions = _sessions(sequelize, DataTypes);
  var sharing_groups = _sharing_groups(sequelize, DataTypes);
  var space = _space(sequelize, DataTypes);
  var space_has_interests = _space_has_interests(sequelize, DataTypes);
  var space_has_members = _space_has_members(sequelize, DataTypes);
  var space_has_reports = _space_has_reports(sequelize, DataTypes);
  var space_members = _space_members(sequelize, DataTypes);
  var story = _story(sequelize, DataTypes);
  var story_has_interests = _story_has_interests(sequelize, DataTypes);
  var story_has_reports = _story_has_reports(sequelize, DataTypes);
  var story_has_sharing_groups = _story_has_sharing_groups(sequelize, DataTypes);
  var story_has_space = _story_has_space(sequelize, DataTypes);
  var user_social_accounts = _user_social_accounts(sequelize, DataTypes);
  var user_status = _user_status(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var users_has_badges = _users_has_badges(sequelize, DataTypes);
  var users_has_interests = _users_has_interests(sequelize, DataTypes);
  var users_has_muted_users = _users_has_muted_users(sequelize, DataTypes);
  var users_has_sharing_groups = _users_has_sharing_groups(sequelize, DataTypes);

  alias_profile.belongsTo(users, { foreignKey: "id_user"});
  users.hasOne(alias_profile, { foreignKey: "id_user"});
  comment_like.belongsTo(post_comments, { foreignKey: "id_post_comment"});
  post_comments.hasMany(comment_like, { foreignKey: "id_post_comment"});
  comment_like.belongsTo(story, { foreignKey: "id_user"});
  story.hasMany(comment_like, { foreignKey: "id_user"});
  followers.belongsTo(users, { foreignKey: "id_user"});
  users.hasMany(followers, { foreignKey: "id_user"});
  moments.belongsTo(users, { foreignKey: "id_user_created"});
  users.hasMany(moments, { foreignKey: "id_user_created"});
  moments_has_reports.belongsTo(content_reports, { foreignKey: "id_content_report"});
  content_reports.hasMany(moments_has_reports, { foreignKey: "id_content_report"});
  moments_has_reports.belongsTo(moments, { foreignKey: "id_moment"});
  moments.hasMany(moments_has_reports, { foreignKey: "id_moment"});
  muted_users.belongsTo(users, { foreignKey: "id_muted_user"});
  users.hasOne(muted_users, { foreignKey: "id_muted_user"});
  muted_users.belongsTo(users, { foreignKey: "id_user_who_muted"});
  users.hasMany(muted_users, { foreignKey: "id_user_who_muted"});
  post_actions.belongsTo(users, { foreignKey: "id_action_user"});
  users.hasMany(post_actions, { foreignKey: "id_action_user"});
  post_comments.belongsTo(users, { foreignKey: "id_user"});
  users.hasMany(post_comments, { foreignKey: "id_user"});
  profile.belongsTo(users, { foreignKey: "id_user"});
  users.hasOne(profile, { foreignKey: "id_user"});
  restricted_users.belongsTo(users, { foreignKey: "id_user"});
  users.hasMany(restricted_users, { foreignKey: "id_user"});
  story_has_reports.belongsTo(content_reports, { foreignKey: "id_content_report"});
  content_reports.hasMany(story_has_reports, { foreignKey: "id_content_report"});
  story_has_sharing_groups.belongsTo(sharing_groups, { foreignKey: "id_sharing_group"});
  sharing_groups.hasMany(story_has_sharing_groups, { foreignKey: "id_sharing_group"});
  story_has_sharing_groups.belongsTo(story, { foreignKey: "id_story"});
  story.hasMany(story_has_sharing_groups, { foreignKey: "id_story"});
  user_social_accounts.belongsTo(users, { foreignKey: "id_user"});
  users.hasMany(user_social_accounts, { foreignKey: "id_user"});
  user_status.belongsTo(users, { foreignKey: "id_user_status"});
  users.hasOne(user_status, { foreignKey: "id_user_status"});
  users_has_interests.belongsTo(interests, { foreignKey: "id_interest"});
  interests.hasMany(users_has_interests, { foreignKey: "id_interest"});
  users_has_interests.belongsTo(users, { foreignKey: "id_user"});
  users.hasMany(users_has_interests, { foreignKey: "id_user"});
  users_has_muted_users.belongsTo(muted_users, { foreignKey: "id_muted_users"});
  muted_users.hasMany(users_has_muted_users, { foreignKey: "id_muted_users"});
  users_has_muted_users.belongsTo(users, { foreignKey: "id_user"});
  users.hasMany(users_has_muted_users, { foreignKey: "id_user"});
  users_has_sharing_groups.belongsTo(sharing_groups, { foreignKey: "id_sharing_group"});
  sharing_groups.hasMany(users_has_sharing_groups, { foreignKey: "id_sharing_group"});
  users_has_sharing_groups.belongsTo(users, { foreignKey: "id_user"});
  users.hasMany(users_has_sharing_groups, { foreignKey: "id_user"});

  return {
    _evolutions,
    alias_profile,
    badges,
    comment_like,
    content_reports,
    followers,
    interests,
    moments,
    moments_has_reports,
    muted_users,
    post_actions,
    post_comments,
    post_comments_has_interests,
    post_likes,
    profile,
    restricted_users,
    sessions,
    sharing_groups,
    space,
    space_has_interests,
    space_has_members,
    space_has_reports,
    space_members,
    story,
    story_has_interests,
    story_has_reports,
    story_has_sharing_groups,
    story_has_space,
    user_social_accounts,
    user_status,
    users,
    users_has_badges,
    users_has_interests,
    users_has_muted_users,
    users_has_sharing_groups,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
