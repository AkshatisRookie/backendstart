const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/gmail', (req, res)=>{
    res.send('u23ee101')
})
app.get('/login' ,(req,res)=>{
    res.send('<h1>please login at a akshat</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
