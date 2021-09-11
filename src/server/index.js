const dotenv = require('dotenv')
dotenv.config()
const axios = require('axios')

var path = require('path')
const express = require('express')

const bodyParser = require('body-parser')
const cors = require('cors')

const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use(express.static('dist'))

// Global_Define
let userInput = []

app.get('/', function (req, res) {
  res.sendFile('dist/index.html')
  // res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/test', function (req, res) {
  res.send(mockAPIResponse)
})

app.post('/api', async function (req, res) {
  userInput = req.body.url
  const apiURL = `https://api.meaningcloud.com/sentiment-2.1?lang=auto&key=${process.env.API_KEY}&url=${userInput}`
  console.log('i am here')
  try {
    const resAPI = await axios(apiURL)
    console.log('data come + ', resAPI)
    const comingData = {
      status: resAPI.data.status.code,
      text: resAPI.data.sentence_list,
      score_tag: resAPI.data.score_tag,
      agreement: resAPI.data.agreement,
      subjectivity: resAPI.data.subjectivity,
      confidence: resAPI.data.confidence,
      irony: resAPI.data.irony
    }
    res.send(comingData)
    console.log('this is the result', comingData)
  } catch (err) {
    console.log('error', err)
  }
})

// designates what port the app will listen to for incoming requests
app.listen(8081, () => {
  console.log('Example app listening on port 8081!')
})

module.exports = {
  app
}
