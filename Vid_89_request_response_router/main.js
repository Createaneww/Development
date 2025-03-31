const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')

const app = express()
const port = 3000

app.use(express.static("Public"))
app.use('/blog', blog)
app.use('/shop', shop)


app.get('/', (req, res) => {
    console.log("hey its a get request");
    res.send('Hello World2 get!')
})
app.get('/index', (req, res) => {
    console.log("hey its a index");
    res.sendFile('templates/index.html', {root: __dirname})
})


app.post('/', (req, res) => {
    console.log("hey its a Post request");
    res.send('Hello World post')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})