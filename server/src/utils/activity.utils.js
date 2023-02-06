module.exports = {
  // constructs query parameter for Bored API based on user profile if it exists else returns an empty object
  getActivityParam: (userProfile) => {
    const priceMap = {
      Free: {
        price: 0,
      },
      Low: {
        minprice: 0.01,
        maxprice: 0.5,
      },
      High: {
        minprice: 0.51,
        maxprice: 1,
      },
    };
    const accessibilityMap = {
      High: {
        minaccessibility: 0,
        maxaccessibility: 0.25,
      },
      Medium: {
        minaccessibility: 0.26,
        maxaccessibility: 0.75,
      },
      Low: {
        minaccessibility: 0.76,
        maxaccessibility: 1,
      },
    };
    return {
      ...priceMap[userProfile?.price],
      ...accessibilityMap[userProfile?.accessibility],
    };
  },

  // maps the price and accessibility numerical value to their respective category
  customizeActivityResponse: (activity) => {
    activity.price =
      activity.price == 0 ? "Free" : activity.price <= 0.5 ? "Low" : "High";

    activity.accessibility =
      activity.accessibility <= 0.25
        ? "High"
        : activity.accessibility <= 0.75
        ? "Medium"
        : "Low";

    return activity;
  },
};
