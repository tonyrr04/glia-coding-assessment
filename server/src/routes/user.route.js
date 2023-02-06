const Router = require("express").Router();
const userProfileController = require("../controllers/user.controller");

Router.route("/").post(userProfileController.create);

module.exports = Router;
