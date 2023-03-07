const dataSource = require("../utils").dataSource;
const Wilder = require("../entity/Wilder");
const Skill = require("../entity/Skill");

module.exports = {
  create: async (req, res) => {
    try {
      await dataSource.getRepository(Wilder).save(req.body);
      res.send("Created Wilder");
    } catch (err) {
      console.error(err);
      res.send("Error while creating Wilder");
    }
  },
  read: async (req, res) => {
    try {
      const data = await dataSource.getRepository(Wilder).find();
      res.send(data);
    } catch (err) {
      console.error(err);
      res.send("Error while reading Wilder");
    }
  },
  update: async (req, res) => {
    try {
      const updatedUser = await dataSource
        .getRepository(Wilder)
        .update(req.params.id, req.body);
      res.send(updatedUser);
    } catch (err) {
      console.error(err);
      res.send("Error while updating Wilder");
    }
  },
  delete: async (req, res) => {
    try {
      const deletedUser = await dataSource
        .getRepository(Wilder)
        .delete(req.params.id);
      res.send(deletedUser);
    } catch (err) {
      console.error(err);
      res.send("Error while deleting Wilder");
    }
  },
  addSkill: async (req, res) => {
    try {
      const wilderToUpdate = await dataSource
        .getRepository(Wilder)
        .findOneBy({ id: req.params.wilderId });
      const skillToAdd = await dataSource
        .getRepository(Skill)
        .findOneBy({ name: req.body.skillName });
      wilderToUpdate.skills = [...wilderToUpdate.skills, skillToAdd];
      await dataSource.getRepository(Wilder).save(wilderToUpdate);
      res.send("Skill added to wilder");
    } catch (err) {
      console.log(err);
      res.send("Error while adding skill to wilder");
    }
  },
};
