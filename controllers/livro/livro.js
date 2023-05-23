const fs = require("fs")
const { STATUS_CODES } = require("http")
const { getAllLivrosService, getLivroByIdService, cadastrarLivroService, editarLivroService, deletarLivroService } = require("../../services/livros/livro")

function getLivros(req, res) {
    try{
        const livros = getAllLivrosService()
        res.send(livros)
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
   
}


function getLivroById(req, res) {
    try{
        const id = req.params.id
        if(!id || !Number(id)){
            throw Error("Id inválido")
        }
        const livro = getLivroByIdService(id)
        res.send(livro)
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
   
}

function cadastrarLivro(req, res) {
    try{
        //const Livro = require("../../model/livro");
        //const initLivro = new Livro(req.id, req.nome)
        console.log(req)
        cadastrarLivroService(req.body)
        res.send("Livro cadastrado com sucesso")
        res.status(201)
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
   
}



function editarLivro(req, res) {
    try{
        const id = req.params.id
        const novoNome = req.body
        const livroAtualizado = editarLivroService(id,novoNome)
        res.send(livroAtualizado)
    
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
   
}



function deletarLivro(req, res) {
    try{
        const id = req.params.id
        deletarLivroService(id)
        res.send("Livro removido com sucesso")
    
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
   
}

module.exports = {
    getLivros,
    getLivroById,
    cadastrarLivro,
    editarLivro,
    deletarLivro
}