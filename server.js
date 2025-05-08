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
    res.send(`<body style="background-color:lightblue">
                <h1>Data:</h1>
                <p style="color:green">${JSON.stringify(data)}</p>
              </body>`)
})

app.get('/dashboard', (req, res) => {
    res.send('<h1>Dashboard</h1>')
})

app.get('/api/data', (req, res) => {
    console.log('This one is for data')
    res.send(data)
})