import 'babel-polyfill'

import { checkForName } from '../js/nameChecker'

describe('check fn. "checkForName()" if exist', () => {
  test('return true', async () => {
    expect(checkForName).toBeDefined()
  })
})
describe('check fn. "checkForName()" as fn.', () => {
  test('return a function', async () => {
    expect(typeof checkForName).toBe('function')
  })
})

describe('check for valid url', () => {
  var url = 'https://youtube.com'
  test('return true', async () => {
    const resp = checkForName(url)
    expect(resp).toBeDefined()
    expect(resp).toBe(true)
  })
})
describe('check for invalid url', () => {
  var url = 'htp:/youtube.com'
  test('return false', async () => {
    const resp = checkForName(url)
    expect(resp).toBeDefined()
    expect(resp).toBe(false)
  })
})
