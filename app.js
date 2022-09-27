const express = require("express");
const { connectToMongodb } = require("./db");
const userRoute = require("./routes/user");
const mongoose = require("mongoose");
const registerRoute = require("./routes/auth");

require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

// connecting to mongodb instance
connectToMongodb();
app.use(express.json());
app.use("/users", userRoute);
app.use("/api/auth", registerRoute);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`Server started on PORT: http://localhost:${PORT}`);
});
