const express = require("express");
const router = express.Router();

/* GET history page. */
router.get("/", function(req, res, next) {
  res.render("history", { title: "Terrence Kuiper's History" });
});

module.exports = router;
