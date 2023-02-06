// Custom Error class to set the status code and error message
class AppError extends Error {
  constructor(msg, statusCode) {
    super(msg);
    this.statusCode = statusCode;
  }
}
module.exports = AppError;
