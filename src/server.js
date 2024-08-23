const express = require("express");

const routes = require("./routes"); /* If there isn't any name specifying the file, it will automatically open index.js */

const app = express();
app.use(express.json());

app.use(routes);

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
