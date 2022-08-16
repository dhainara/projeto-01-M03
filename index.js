import express from "express"
import cors from "cors"
import animes from "./mocks/animes.js"
import {animesController} from "./controllers/animes.controller.js"
import animesRouter from "./routers/animes.routers.js"

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Olá!')
})

app.use('/animes', animesRouter)

app.listen(3000, () => {
    console.log('A aplicação está rodando perfeitamente!');
    console.log('Acesse em: http://localhost:3000');
});