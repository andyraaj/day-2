const express = require("express")


const app = express()// server instane create karna

app.get('/', (req,res) => {
    res.send("Jello World")
})

app.get('/about', (req,res) => {
    res.send("This is about page")
})
app.listen(3000)// server start karna

