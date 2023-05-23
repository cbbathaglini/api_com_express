const fs = require("fs")

function getAllLivrosService(){
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroByIdService(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    return livros.filter(livro => livro.id === id)[0]
}


function cadastrarLivroService(livro){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const novaLista =  [...livros,livro]
    fs.writeFileSync("livros.json", JSON.stringify(novaLista))
}

module.exports = {
    getAllLivrosService,
    getLivroByIdService,
    cadastrarLivroService
}