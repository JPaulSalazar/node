const http = require('http')
const url = require('url')
const operacion = require('./suma')

const hostname = 'localhost' 
const port = 5000

const server = http.createServer((req, res) => {
  const pathUrl = url.parse(req.url, true)
  res.statusCode = 200
  res.setHeader('content-type', 'text/plain' )
  res.write(`Suma es: ${operacion.suma(pathUrl.query.num1, pathUrl.query.num2)}`)
  res.end()
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`)
})