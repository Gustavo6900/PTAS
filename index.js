import express from 'express'
const app = express()

app.get('/calculadora/:ope/:numb1/:numb2', (req,res) => {

    const numb1 = parseFloat(req.params.numb1)
    const numb2 = parseFloat(req.params.numb2)

    const verifica = (x,y) => {
        if(req.params.ope == "divisao"){
            x / y
        }
        if(req.params.ope == "adicao"){
            x + y
        }
        if(req.params.ope == "multiplicacaoo"){
            x * y
        }
        if(req.params.ope == "subtracao"){
            x - y
        }
    }


   const resultado =  verifica(numb1, numb2)
    res.send(`<h2>Resultado : ${resultado}<h2>`)

})


app.listen(3334, ()=> {
    console.log("servidor rodando na porta 3334")
})