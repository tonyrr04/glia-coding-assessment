const AppError = require("../errors/appError");
const user = require("../model/user");

module.exports = {
  create: (req, res, next) => {
    // Validate request
    if (
      !req.body.name ||
      !["High", "Medium", "Low"].includes(req.body.accessibility) ||
      !["Free", "Low", "High"].includes(req.body.price)
    ) {
      return next(new AppError("Invalid request parameters", 400));
    }

    // save the user profile to the user class variable
    user.setUserProfile(req.body);

    res.send({
      message: "Successfully created user profile",
    });
  },
};
