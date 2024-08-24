import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Pegando dados.')
})

export default app
