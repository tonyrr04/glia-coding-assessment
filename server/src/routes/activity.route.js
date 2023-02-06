const Router = require("express").Router();
const activityController = require("../controllers/activity.controller");

Router.route("/").get(activityController.get);

module.exports = Router;
