const express = require("express");
const router = express.Router();

/* GET projects page. */
router.get("/", function(req, res, next) {
  res.render("projects", { title: "Terrence Kuiper's Projects" });
});

module.exports = router;
