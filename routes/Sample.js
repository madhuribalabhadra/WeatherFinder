var express = require("express");
const router = express.Router();

router.get("", (req, res) => {
  res.json({ sample: "sample" });
});

module.exports = router;
