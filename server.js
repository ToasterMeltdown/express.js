const express = require('express')
const app = express()
const PORT = 8383

let data = {
    name: 'André'
}



// URL --> http://localhost:8383
// IP --> 127.0.0.1:8383
app.listen(PORT, () => {
    console.log(`Server has started on: ${PORT}`)
})

app.get('/', (req, res) => {
    console.log('Yay. I hit an endpoint', req.method)
    res.send('<h1>Homepage</h1>')
})

app.get('/dashboard', (req, res) => {
    res.send('<h1>Dashboard</h1>')
})

app.get('api/data', (req, res) => {
    console.log('This one is for data')
    res.send(data)
})