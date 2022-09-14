const mongoose = require("mongoose");

const app = require("./app");
const { DB_HOST, PORT = 4040 } = process.env;

mongoose
  .connect(DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log("Server started")))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
