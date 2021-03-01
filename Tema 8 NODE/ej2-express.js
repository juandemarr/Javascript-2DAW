const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello There con exppress!')
  //res.sendFile(__dirname + '/prueba-ej2.html');
})

app.listen(3000, () => {
  console.log(`Ejemplo escuchando en http://localhost:3000`)
})