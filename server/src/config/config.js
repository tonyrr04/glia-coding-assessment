require("dotenv").config();

module.exports = {
  port: process.env.PORT || 4000,
  cors_origin: "http://localhost:3000",
  boredAPI: "http://www.boredapi.com/api/activity/",
};
