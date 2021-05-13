const express = require("express");
const mongoose = require("mongoose");
//
// const morgan = require("morgan");
const logger = require("morgan");
const api = require("./routes/api.js");
const html = require("./routes/html.js")

const PORT = process.env.PORT || 3000;

const app = express();
//
// app.use(morgan("dev"));
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(html);
app.use(api);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});

// // routes
// app.use(require("./routes/html.js"));
// app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
