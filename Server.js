const express = require("express");
const app = express();
const connectDB = require("./config/db");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use("/api/users", require("./models/Routes/Users"));
app.use("/api/auth", require("./models/Routes/Auth"));
app.use("/api/contacts", require("./models/Routes/Contacts"));

//connect database
connectDB();

app.get("*", (req, res) => {
  res.status(404).json({ msg: "Not Found" });
});

app.listen(PORT, () => console.log("Server Conected"));
