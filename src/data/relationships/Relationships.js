const User = require("../models/UserModel");
const Category = require("../models/CategoryModel");
const Members = require("../models/MembersModel");
const Task = require("../models/TaskModel");
const Group = require("../models/GroupModel");
const { DataTypes } = require("sequelize");

Group.belongsToMany('tasks', { through: Members });

Category.hasMany('tasks');
Task.BelongsTo('categories', {
  foreignKey: {
    name: "CategoryId",
    type: DataTypes.INTEGER,
  },
});
