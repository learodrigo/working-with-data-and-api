const express = require('express')
const app = express()

app.listen(3000, () => { console.log('Go to http://localhost:3000...') })

app.use(express.static('public'))
app.use(express.json({ limit: '1mb' }))

app.post('/api', (request, response) => {
  console.log(request.body)
  response.json({
    status: 'success',
    latitude: request.body.lat,
    longitude: request.body.lon
  })
})
