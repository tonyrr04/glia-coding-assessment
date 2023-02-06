const axios = require("axios");
const config = require("../config/config");

module.exports = {
  // requests activity data from Bored API
  getActivity: (param) => {
    return axios.get(config.boredAPI, {
      params: param,
    });
  },
};
