const fs = require("fs")

function getAllLivrosFavoritosService(){
    return JSON.parse(fs.readFileSync("livros_favoritos.json"))
}


function cadastrarLivrofavoritoService(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const favoritos =  JSON.parse(fs.readFileSync("livros_favoritos.json"))
    
    const livroInserido = livros.find(livro => livro.id === id)
    const novaLista = [...favoritos,livroInserido]
    fs.writeFileSync("livros_favoritos.json", JSON.stringify(novaLista))
}


function deletarLivroFavoritoService(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const novaLista =  livros.filter(livro => livro.id !== id)

    fs.writeFileSync("livros.json", JSON.stringify(novaLista))

}

module.exports = {
    cadastrarLivrofavoritoService,
    getAllLivrosFavoritosService,
    deletarLivroFavoritoService
}