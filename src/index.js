const express = require("express");
const wilderController = require("./controller/wilderController.js");
const dataSource = require("./utils").dataSource;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/wilder", wilderController.read);
app.delete("/api/wilder", wilderController.delete);

app.post("/api/wilder", wilderController.create);
const port = 3000;

//Start Server
const start = async () => {
  await dataSource.initialize();
  app.listen(port, () =>
    console.log(`Server started on http://localhost:${port}`)
  );
};

start();
