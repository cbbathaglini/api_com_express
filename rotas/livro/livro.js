const { Router } = require("express")
const router = Router()
const { getLivros }= require("../../controllers/livro/livro")

router.get("/", getLivros)

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