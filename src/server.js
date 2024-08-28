require("express-async-errors");
const database = require("./database/sqlite")

const AppError = require("./utils/AppError")

const express = require("express");

const routes = require("./routes"); /* If there isn't any name specifying the file, it will automatically open index.js */

const app = express();


app.use(express.json());


app.use(routes);

database();

app.use(( error, req, res, next) => {
  if(error instanceof AppError ){
    return res.status(error.statusCode).json({
      status: "error",
      message: error.message
    })
  }

  console.error(error);

  return res.status(500).json({
    status: "error",
    message: "Internal server error"
  });
})

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
