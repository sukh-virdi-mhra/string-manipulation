import express from "express"
import main from "./main"

const PORT = 3000
const app = express()

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.get("/", (req, res) => {
    res.render("index")
})

app.post("/wordCounter", (req, res) => {
    let wordCounter = main(req.body.str)
    res.send(wordCounter)
})
app.set("title", "Word Counter")
app.set("view engine", "pug")
app.set("views", "./out/views")

app.listen(PORT,() => {
    console.log(`Server is Listening at http://localhost:${PORT}`)
})
