const express = require('express')
const app = express()
const PORT = 8383

// URL --> http://localhost:8383
// IP --> 127.0.0.1:8383
app.listen(PORT, () => {
    console.log(`Server has started on: ${PORT}`)
})

app.get('/', (req, res) => {
    res.send('Hello, World!')
})