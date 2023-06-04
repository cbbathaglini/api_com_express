const { Router } = require("express")
const router = Router()
const { getLivrosFavoritos, deletarLivroFavorito, cadastrarLivroFavorito }= require("../../controllers/livro/livros_favoritos")

// Consultar
router.get("/", getLivrosFavoritos)

// Inserção
router.post("/", cadastrarLivroFavorito)

//Remoção
router.delete("/:id", deletarLivroFavorito)


module.exports = router