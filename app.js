const e = require("express")
const express = require("express")
const rotaLivro = require("./rotas/livro/livro")
const rotaLivrosFavoritos = require("./rotas/livro/livros_favoritos")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors({origin: "*"}))
const port = 8011


app.use("/livros", rotaLivro)
app.use("/favoritos", rotaLivrosFavoritos)

app.listen(port, () =>{
    console.log(`Escutando a porta ${port}`)
} )