const express = require("express")
const rotaLivro = require("./rotas/livro/livro")

const app = express()

 const port = 8011


app.use("/livros", rotaLivro)

app.listen(port, () =>{
    console.log(`Escutando a porta ${port}`)
} )