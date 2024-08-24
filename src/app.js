import express, { json } from 'express'

const app = express()
app.use(express.json())

const selecoes = [
    {id: 1, selecao: "Argentina", grupo: "A"},
    {id: 2, selecao: "Brasil", grupo: "B"},
    {id: 3, selecao: "Chile", grupo: "C"},
    {id: 4, selecao: "Dinamarca", grupo: "D"},
    {id: 5, selecao: "Equador", grupo: "E"},
    {id: 5, selecao: "Franca", grupo: "F"},

]

function buscarSelecaoPorId(id) {
    return selecoes.filter(selecao => selecao.id == id)
}

app.get('/', (req, res) => {
    res.send('Pegando dados...')
})

app.get('/selecoes', (req, res) => {
    res.send(selecoes)
})

app.post('/selecoes', (req, res) =>{
    selecoes.push(req.body)
    res.status(201).send('Seleção adicionada com sucesso')
})

app.put('/selecoes/:id',(req, res) => {
    const index = req.params.id - 1
     selecoes[index] = req.body
     res.send(`Selecao com id ${req.params.id} alterada com sucesso`)
})

app.delete('/selecoes/:id', (req, res) => {
    const index = req.params.id
    console.log(index)
    selecoes.splice(index - 1, 1)
    res.send(`Selecao com id ${req.params.id} excluida com sucesso`)
})

export default app
