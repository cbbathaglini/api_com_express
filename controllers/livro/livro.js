function getLivros(req, res) {
    try{
        //throw new Error("teste")
        res.send("Get livros")
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
   
}

module.exports = {
    getLivros
}