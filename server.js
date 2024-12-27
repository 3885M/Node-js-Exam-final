const express = require("express");
const path = require("path");
const { urlencoded } = require("express");
const cookie = require("cookie-parser");
const fs = require("fs");
const port= 3404;
const router = require("./routers/router.js");
const DataBase = require("./config/database.js")
const app = express();

app.set("view engine", "ejs");
app.use(urlencoded({ extended: false }));
app.use("/uploads", express.static("uploads"));
app.use(express.static(path.join(__dirname, "/public")));

app.use(cookie());
app.use(router);

app.listen(3404, (err) => {
  DataBase();
  if (err) {
    console.log(err);
  } else {
    console.log("Server Connected http://localhost:"+port);
  }
});
