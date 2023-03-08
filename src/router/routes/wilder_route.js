const express = require("express");
const router = express.Router();
const WilderController = require("../../controller/WilderController.js");

const wilderController = new WilderController();

router
  .get("/", wilderController.read)
  .post("/", wilderController.create)
  .put("/:id", wilderController.update)
  .delete("/:id", wilderController.delete)
  .post("/:wilderId/skill/:skillId", wilderController.addSkill);

module.exports = router;
