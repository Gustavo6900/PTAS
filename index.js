const express = require("express")
const app = express()

app.get('/', (req,res) =>{
    res.send('Bem-vindo')
})

app.get('/items', (req,res) => {
    res.send('Pagina de itens')
})


app.listen(3001,() =>{
console.log("servidor rodando na url http://localhost:3001")
})