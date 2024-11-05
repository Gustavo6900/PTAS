const express = require("express")
const app = express()
const controller = require('./controller/itemsController')

const loggerMiddleware = require("./middlewares/loggerMiddleware");

app.get('/', (req,res) =>{
    res.send('Bem-vindo')
})

app.get('/items', loggerMiddleware, controller.get
)


app.listen(3001,() =>{
console.log("servidor rodando na url http://localhost:3001")
})