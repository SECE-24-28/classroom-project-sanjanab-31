const express = require("express");
const cors = require("cors");
const port=4000;
const app = express();
app.use(express.json());
app.use(cors())

const courses = require("./data/db.json");

app.listen(port, () => {
  console.log(`Server is running on port number 4000`);
}
)