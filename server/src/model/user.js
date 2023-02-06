// an ES6 class module that is used to store and retrieve user profile information at global scope
class User {
  userprofile = undefined;

  static getInstance() {
    if (!this.instance) {
      this.instance = new User();
    }
    return this.instance;
  }

  getUserProfile() {
    return this.userprofile;
  }

  setUserProfile(userProfile) {
    this.userprofile = userProfile;
  }
}

const user = User.getInstance();

module.exports = user;
