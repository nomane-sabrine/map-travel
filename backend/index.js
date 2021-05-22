const express = require("express");
const app = express();
const port = 3500;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const user = require("./controllers/users.js");
const pin = require("./controllers/pins");

dotenv.config();

app.use(express.json());

mongoose
  .connect(process.env.Mongo_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongodb is connected");
  })
  .catch((err) => {
    console.log(err);
  });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//     console.log('DB Connected ...')
// });

app.get("/", (req, res) => {
  res.send("Hello  RBK!");
});

app.use("/api/pins", pin);
app.use("/api/users", user);

app.listen(port, () => {
  console.log(`Example app listeninggg  at http://localhost:${port}`);
});
