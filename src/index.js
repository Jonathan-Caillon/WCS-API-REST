const express = require("express");
const wilderController = require("./controller/wilderController.js");
const skillController = require("./controller/skillController.js");
const dataSource = require("./utils").dataSource;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/wilder", wilderController.read);
app.post("/api/wilder", wilderController.create);
app.put("/api/wilder/:id", wilderController.update);
app.delete("/api/wilder/:id", wilderController.delete);
app.post("/api/wilder/:wilderId/skill", wilderController.addSkill);

app.get("/api/skill", skillController.read);
app.post("/api/skill", skillController.create);
app.put("/api/skill/:id", skillController.update);
app.delete("/api/skill/:id", skillController.delete);

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
