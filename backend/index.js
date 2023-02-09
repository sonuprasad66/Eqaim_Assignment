const { formRouter } = require("./Routes/Form.route");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const PORT = 8080;

// app.use("/", (req, res) => {
//   res.send("Welcome to Home Page");
// });

app.use("/", formRouter);

app.listen(PORT, (req, res) => {
  try {
    console.log("App listening on PORT 8080");
  } catch (err) {
    console.log(err);
  }
});
