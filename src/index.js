const express = require("express");
const morgan = require("morgan");
const path = require("path");
const routes = require('./routes');

// initialitazion
const app = express();

// Settings
app.set("port", process.env.PORT || 4000);
app.set("view engine", "ejs");

//Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Globla Variables
app.use((req, res, next) => {
  next();
});

//Routes
app.use(require("./routes"));
app.use(require("./routes/auth"));
app.use(require("./routes/paciente"));
app.use(require("./routes/users"));
app.use("link", require("./routes/links"));
app.set("views", "src/views");

//Public
app.use(express.static(path.join(__dirname, 'public')));

//start the server
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
