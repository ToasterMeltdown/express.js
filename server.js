const express = require('express')
const app = express()
const PORT = 8383

let data = ['André']

// Middleware
app.use(express.json())


// URL --> http://localhost:8383
// IP --> 127.0.0.1:8383
app.listen(PORT, () => {
    console.log(`The server has started, and is running on http://localhost:8383`)
})

app.get('/', (req, res) => {
    res.send(`<body style="background-color:lightblue">
                <h1>Data:</h1>
                <p style="color:green">${JSON.stringify(data)}</p>
                <a href="/dashboard">Dashboard</a>
              </body>`)
})

app.get('/dashboard', (req, res) => {
    res.send(`<body>
                <h1>Dashboard</h1>
                <a href="/">Home</a>        
              </body>`)
})

app.get('/api/data', (req, res) => {
    console.log('This one is for data')
    res.send(data)
})

app.post('/api/data', (req, res) => {
    const newEntry = req.body
    console.log(newEntry)
    data.push(newEntry.name)
    res.sendStatus(201)
})

app.delete('/api/data', (req, res) => {
    data.pop()
    console.log('We deleted the element of the end of the array')
    res.sendStatus(418)
})