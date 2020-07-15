const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// App config
const dev = process.env.NODE_ENV !== "production";
const config = require("./configs/config");
const port = 8000;
const app = express();

// MongoDB
mongoose
  .connect(
    config.mongoURL,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("MongoDB ready");
  })
  .catch(err => {
    console.log("MongoDB error", err);
  });

// Static files
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/client/build"));

// Body and cookie parsers
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// Passport
app.use(passport.initialize());
require("./configs/passport")(passport);

// Routes
app.use("/api/posts", require("./routes/posts"));
app.use("/api/users", require("./routes/users"));

// Start server
if (dev) {
  app.listen(port, () => {
    console.log(`Server started on ${port} port.`);
  });
} else {
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });

  app.listen(80, () => {
    console.log(`Server started on 80 port.`);
  });
}
