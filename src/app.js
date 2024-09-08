import express, { json } from 'express'
import SelecaoController from './app/controllers/SelecaoController'

const app = express()
app.use(express.json())

/* 
MOCK Selecoes
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
*/

app.get('/selecoes', SelecaoController.index)
app.post('/selecoes', SelecaoController.store)
app.put('/selecoes/:id', SelecaoController.update)
app.delete('/selecoes/:id', SelecaoController.delete)

export default app
