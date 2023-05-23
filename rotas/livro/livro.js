const { Router } = require("express")
const router = Router()
const { getLivros, getLivroById, cadastrarLivro, editarLivro }= require("../../controllers/livro/livro")

// Consultar
router.get("/", getLivros)
router.get("/:id", getLivroById)

// Inserção
router.post("/", cadastrarLivro)

//Edição
router.patch("/:id", editarLivro)


router.post("/", (req, res) => {
    res.send("Post livros")
})

router.put("/", (req, res) => {
    res.send("Put livros")
})

router.patch("/", (req, res) => {
    res.send("Patch livros")
})

router.delete("/", (req, res) => {
    res.send("Delete livros")
})

module.exports = router