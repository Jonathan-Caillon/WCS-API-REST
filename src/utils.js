const typeorm = require("typeorm");

module.exports = {
  dataSource: new typeorm.DataSource({
    type: "sqlite",
    database: "./wildersdb.sqlite",
    synchronize: true,
    entities: [require("./entity/Wilder.js"), require("./entity/Skill.js")],
    logging: ["query", "error"],
  }),
};
