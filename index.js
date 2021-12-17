import express from 'express'

const app = express()
app.get('/', (req, res) => {
    return "Hello World"
})

console.log('server running')