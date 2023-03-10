const express = require('express')
var bodyParser = require('body-parser');

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.post('/customer', (req, res) => {
    console.log(req.body);
  res.send('Api called!')
})

app.listen(port, () => {
  console.log(`Thogakade app listening on port ${port}`)
})