const dataSource = require("../utils").dataSource;
const Wilder = require("../entity/Wilder");
const Skill = require("../entity/Skill");

class WilderController {
  async create(req, res) {
    try {
      await dataSource.getRepository(Wilder).save(req.body);
      res.status(201).send("Created Wilder");
    } catch (err) {
      console.error(err);
      res.status(400).send("Error while creating Wilder");
    }
  }

  async read(req, res) {
    try {
      const data = await dataSource.getRepository(Wilder).find();
      res.send(data);
    } catch (err) {
      console.error(err);
      res.send("Error while reading Wilder");
    }
  }

  async update(req, res) {
    try {
      const wilderId = req.params.id;
      const existingWilder = await dataSource
        .getRepository(Wilder)
        .findOneBy({ id: wilderId });
      if (existingWilder === null) {
        return res.status(404).send("Wilder not found");
      }
      const updatedUser = await dataSource
        .getRepository(Wilder)
        .update(wilderId, req.body);
      res.send(updatedUser);
    } catch (err) {
      console.error(err);
      res.send("Error while updating Wilder");
    }
  }

  async delete(req, res) {
    try {
      const wilderId = req.params.id;
      const existingWilder = await dataSource
        .getRepository(Wilder)
        .findOneBy({ id: wilderId });
      if (existingWilder === null) {
        res.status(404).send("Wilder not found");
        return;
      }
      const deletedUser = await dataSource
        .getRepository(Wilder)
        .delete(wilderId);
      res.send(deletedUser);
    } catch (err) {
      console.error(err);
      res.status(400).send("Error while deleting Wilder");
    }
  }

  async addSkill(req, res) {
    try {
      const wilderToUpdate = await dataSource
        .getRepository(Wilder)
        .findOneBy({ id: req.params.wilderId });
      if (existingWilder === null) {
        return res.status(404).send("Wilder not found");
      }
      const skillToAdd = await dataSource
        .getRepository(Skill)
        .findOneBy({ id: req.params.skillId });
      if (skillToAdd === null) {
        return res.status(404).send("Skill not found");
      }
      wilderToUpdate.skills = [...wilderToUpdate.skills, skillToAdd];
      await dataSource.getRepository(Wilder).save(wilderToUpdate);
      res.send("Skill added to wilder");
    } catch (err) {
      console.log(err);
      res.send("Error while adding skill to wilder");
    }
  }
}

module.exports = WilderController;
