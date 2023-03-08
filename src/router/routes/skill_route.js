const express = require("express");
const router = express.Router();
const SkillController = require("../../controller/SkillController.js");

const skillController = new SkillController();

router
  .get("/", skillController.read)
  .post("/", skillController.create)
  .put("/:id", skillController.update)
  .delete("/:id", skillController.delete);

module.exports = router;
