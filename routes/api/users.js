// use for authercation
const express = require("express");
const router = express.Router();

// @route   GET api/users/test
// @desc    Tests Users route
// @access  Private
router.get("/test", (req, res) =>
  res.json({
    msg: "Users Works"
  })
);

module.exports = router;