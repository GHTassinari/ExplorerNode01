const express = require ("express");

const app = express();

app.post("/users", (req, res) => {

  res.send("Você chamou o post");
})


const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));