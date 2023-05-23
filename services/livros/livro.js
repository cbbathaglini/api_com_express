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


function editarLivroService(id,modificacoes){
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)

    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes }

    livrosAtuais[indiceModificado] = conteudoMudado
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))

    return livrosAtuais[indiceModificado]

}


function deletarLivroService(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const novaLista =  livros.filter(livro => livro.id !== id)

    fs.writeFileSync("livros.json", JSON.stringify(novaLista))

}


module.exports = {
    getAllLivrosService,
    getLivroByIdService,
    cadastrarLivroService,
    editarLivroService,
    deletarLivroService
}