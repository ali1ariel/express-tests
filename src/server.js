const port = 3003

const express = require('express')
const app = express()
const body_parser = require('body-parser')
const database = require('./database')

app.use(body_parser.urlencoded({
    extended: true
}))

app.get('/produtos', (req, res, next) => {
    res.send(database.get_produtos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(database.get_produto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = database.salvar_produto({
        nome: req.body.name,
        preco: req.body.price
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = database.salvar_produto({
        id: req.params.id,
        nome: req.body.name,
        preco: req.body.price
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = database.delete_produto(req.params.id)
    res.send(produto)
})

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}.`)
})