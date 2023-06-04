const fs = require("fs")
const { STATUS_CODES } = require("http")
const {   cadastrarLivrofavoritoService, getAllLivrosFavoritosService, deletarLivroFavoritoService } = require("../../services/livros/livros_favoritos")

function getLivrosFavoritos(req, res) {
    try{
        const livros = getAllLivrosFavoritosService()
        res.send(livros)
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
   
}


function cadastrarLivroFavorito(req, res) {
    try{
        const id = req.params.id
        cadastrarLivrofavoritoService(id)
        res.send("Livro cadastrado com sucesso")
        res.status(201)
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
   
}


function deletarLivroFavorito(req, res) {
    try{
        const id = req.params.id
        deletarLivroFavoritoService(id)
        res.send("Livro removido com sucesso")
    
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
   
}

module.exports = {
    getLivrosFavoritos,
    deletarLivroFavorito,
    cadastrarLivroFavorito
}