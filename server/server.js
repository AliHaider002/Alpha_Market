const express = require("express");
const cors = require("cors");
const routes = require("./lib/routes");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "Alpha Market server is running..." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Alpha Market server is Failed...", error });
  }
});

app.use("/api/v1", routes);

app.listen(process.env.PORT, () => {
  console.log("Server is running at PORT: ", process.env.PORT);
});
