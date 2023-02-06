const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const config = require("./config/config");
const errorHandler = require("./errors/error.handler");

// configure middleware
const app = express();

app.use(
  cors({
    origin: config.cors_origin,
  })
);
app.use(express.json());
app.use(morgan("combined"));

app.use("/activity", require("./routes/activity.route"));
app.use("/user", require("./routes/user.route"));

app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`server started and listening at port ${config.port}...`);
});
