const dataSource = require("../utils").dataSource;
const Skill = require("../entity/Skill");

module.exports = {
  create: async (req, res) => {
    try {
      await dataSource.getRepository(Skill).save(req.body);
      res.send("Created Skill");
    } catch (err) {
      console.error(err);
      res.send("Error while creating Skill");
    }
  },
  read: async (req, res) => {
    try {
      const data = await dataSource.getRepository(Skill).find();
      res.send(data);
    } catch (err) {
      console.error(err);
      res.send("Error while reading Skill");
    }
  },
  update: async (req, res) => {
    try {
      const updatedUser = await dataSource
        .getRepository(Skill)
        .update(req.params.id, req.body);
      res.send(updatedUser);
    } catch (err) {
      console.error(err);
      res.send("Error while updating Skill");
    }
  },
  delete: async (req, res) => {
    try {
      const deletedUser = await dataSource
        .getRepository(Skill)
        .delete(req.params.id);
      res.send(deletedUser);
    } catch (err) {
      console.error(err);
      res.send("Error while deleting Skill");
    }
  },
};
