const express = require('express')
const server = express()
const projectRouter = require('./projects/projectsRouter')
const actionRouter = require('./actions/actionRouter')

server.use(logger)
server.use(express.json())
server.use('/api/projects', projectRouter)
server.use('/api/actions', actionRouter)

server.get('/', (req, res) => {
  res.send('this is the start of something new')
})

function logger(req, res, next) {
  console.log("url: ", req.url)
  console.log("method: ", req.method)
  console.log("time: ", new Date().getTime())
  next()
}

module.exports = server