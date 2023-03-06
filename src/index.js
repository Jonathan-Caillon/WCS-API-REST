const express = require("express");
const typeorm = require("typeorm");
const Wilder = require("./entity/Wilder.js");

const app = express();

const dataSource = new typeorm.DataSource({
  type: "sqlite",
  database: "./wildersdb.sqlite",
  synchronize: true,
  entities: [require("./entity/Wilder.js")],
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

const port = 3000;

//Start Server
const start = async () => {
  await dataSource.initialize();
  dataSource.getRepository(Wilder).save({ name: "First Wilder" });
  app.listen(port, () =>
    console.log(`Server started on http://localhost:${port}`)
  );
};

start();
