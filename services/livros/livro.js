const fs = require("fs")

function getAllLivros(){
    return JSON.parse(fs.readFileSync("livros.json"))
}

module.exports = {
    getAllLivros
}