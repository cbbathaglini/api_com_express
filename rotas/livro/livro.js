const { Router } = require("express")
const router = Router()


router.get("/", (req, res) => {
    try{
        throw new Error("teste")
        res.send("Get livros")
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
   
})

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