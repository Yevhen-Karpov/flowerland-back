const mongoose = require("mongoose");

const app = require("./app");
const { PORT = 8080 } = process.env;

mongoose
  .connect(process.env.DB_HOST)
  .then(() => app.listen(PORT, () => console.log("Server started")))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
