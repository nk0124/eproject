// phele humne import kiya 
// postman testing ka kerta hai eg error 
const express = require('express')
// app is a object of class
const app = express()
// port number hota  haai jispe humari request suni jati hai nodejs ke through
const port = 3000

// diff. types of request 
// https method -> get,post,delete,update or put or patch 
// / about -> main address 
// get method only broswer pe chalta hai pr post or put or patch ko chalne ke liye hum postman use kerte hai 
app.get('/', (req, res) => {
  res.send('Hello Amritsar')
})

app.post('/', (req, res) => {
  res.send('This is a post request')
})

app.put('/', (req, res) => {
  res.send('This is a put request ')
})

app.delete('/:id', (req, res) => {
  let id=req.params.id
  res.send(`record number ${id} is deleted`)
})

app.patch('/', (req, res) => {
  res.send('This is a patch request')
})




app.get('/about', (req, res) => {
    res.send('About Amritsar')
  })

  app.get('/service/:type', (req, res) => {
    let t=req.params.type
    res.send('Sevices we provide'+t)
  })

  app.get('/product/:category/:brand', (req, res) => {
    let c=req.params.category
    let b=req.params.brand
    res.send(`product category ${c} product brand ${b}`)
  })


app.listen(port, () => {
  console.log(` app listening on port ${port}`)
})