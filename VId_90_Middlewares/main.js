const express = require('express')
const app = express()
const port = 3000

  //Middleware 1
  app.use((req, res, next)=> {
    console.log('M1')
    next()
  })
  //Middleware 2
  app.use((req, res, next)=> {
    console.log('M2')
    next()
  })


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})