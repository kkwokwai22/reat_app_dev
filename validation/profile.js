const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};
  data.company = !isEmpty(data.company) ? data.company : "";
  data.website = !isEmpty(data.website) ? data.website : "";
  data.location = !isEmpty(data.location) ? data.location : "";
  data.status = !isEmpty(data.status) ? data.status : "";
  data.bio = !isEmpty(data.bio) ? data.bio : "";
  data.githubusername = !isEmpty(data.githubusername)
    ? data.githubusername
    : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
