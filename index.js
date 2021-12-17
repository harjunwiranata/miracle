import express from 'express'

const app = express()
app.get('/', (req, res) => {
    return "Hello World"
})

app.listen(8000)