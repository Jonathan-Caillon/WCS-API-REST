const dataSource = require("../utils").dataSource;
const Wilder = require("../entity/Wilder");

module.exports = {
  create: (req, res) => {
    dataSource
      .getRepository(Wilder)
      .save(req.body)
      .then(() => {
        res.send("Created Wilder");
      })
      .catch(() => {
        res.send("Error while creating Wilder");
      });
  },
  read: (req, res) => {
    dataSource
      .getRepository(Wilder)
      .find()
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.send("Error while creating Wilder");
      });
  },
  delete: (req, res) => {
    dataSource
      .getRepository(Wilder)
      .delete(req.body)
      .then(() => {
        res.send("Deleted Wilder");
      })
      .catch(() => {
        res.send("Error while deleting Wilder");
      });
  },
};
