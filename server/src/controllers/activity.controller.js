const AppError = require("../errors/appError");
const user = require("../model/user");
const { getActivity } = require("../services/bored-api");
const {
  customizeActivityResponse,
  getActivityParam,
} = require("../utils/activity.utils");

module.exports = {
  get: (req, res, next) => {
    // construct query param with the user profile
    queryParam = getActivityParam(user.getUserProfile());

    // fetch activity from Bored API
    getActivity(queryParam)
      .then((result) => {
        // customize the data and send response if the response does not have any errors
        let activity = null;
        if (!result.data.error) {
          activity = customizeActivityResponse(result.data);
        }
        res.send(activity);
      })
      .catch((err) => {
        console.error("Error in accessing Bored API ::: ", err);
        next(new AppError("Error in fetching activity data", 500));
      });
  },
};
