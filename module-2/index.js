const express = require('express')
const app = express()
app.listen(3000, () => {
  console.log('==============================')
  console.log('Listening to port 3000...')
  console.log('Go to http://localhost:3000...')
  console.log('==============================')
})
app.use(express.static('public'))
