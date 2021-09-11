import 'babel-polyfill'

const request = require('supertest')
const { app } = require('../index.js')

describe('API Test', () => {
  test('check if send get not post', (done) => {
    request(app)
      .get('/api')
      .then((response) => {
        expect(response.statusCode).toBe(404)
        done()
      })
  })
  test('direct to /index.html', (done) => {
    request(app)
      .get('/')
      .send('./dist/index.html')
      .then((response) => {
        expect(response.statusCode).toBe(200)
        done()
      })
  })
  test('test for wrong path', (done) => {
    request(app)
      .get('/newlink')
      .then((response) => {
        expect(response.statusCode).toBe(404)
        done()
      })
  })
})
