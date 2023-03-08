const express = require("express");
const dataSource = require("./utils").dataSource;
const api = require("./router/api");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", api);

app.get("*", function (req, res) {
  res.status(404).send("what???");
});
const port = 3000;

//Start Server
const start = async () => {
  await dataSource.initialize();
  app.listen(port, () =>
    console.log(`Server started on http://localhost:${port}`)
  );
};

start();
