const express = require("express");
const router = express.Router();
const wilder_router = require("./routes/wilder_route");
const skill_router = require("./routes/skill_route");

router

  // Wilder router

  .use("/wilder", wilder_router)

  // Skill router

  .use("/skill", skill_router);

module.exports = router;
