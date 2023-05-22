const fs = require("fs")
const { getAllLivros } = require("../../services/livros/livro")

function getLivros(req, res) {
    try{
        const livros = getAllLivros()
        res.send(livros)
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
   
}

module.exports = {
    getLivros
}