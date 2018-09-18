// experience profile model
// use for authercation
const express = require("express");
const router = express.Router();

router.get("/test", (req, res) =>
  res.json({
    msg: "Profile Works"
  })
);

module.exports = router;
