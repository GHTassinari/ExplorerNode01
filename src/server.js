const express = require ("express");

const app = express();

/* While using Route parameters, providing the values are obligatory, ir order to access the GET */
app.get("/message/:id/:user", (req, res) => {
  const { id , user } = req.params;


  res.send(`Id da mensagem: ${id}.
    Para o usuário: ${user}`)
})

/* While using query parameters, parameters are optional, and you can access the get URL without providing one */
app.get("/users", (req, res) => {
  const { page, limit } = req.query;

  res.send(`Página: ${page}. Mostrar: ${limit}`);
})

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));