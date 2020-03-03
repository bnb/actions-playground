const express = require('express')

const app = express()

app.get('/', (request, response) => {
  response.send('Success!')
  response.end()
})

app.listen(8080, () => console.log('running!!!'))
