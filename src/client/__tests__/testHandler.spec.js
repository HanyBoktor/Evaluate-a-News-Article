import 'babel-polyfill'

import { handleSubmit } from '../js/formHandler'

describe('check fn "handleSubmit()" if exist', () => {
  test('return true', async () => {
    expect(handleSubmit).toBeDefined()
  })
})
describe('check fn "handleSubmit()" as fn', () => {
  test('return a function', async () => {
    expect(typeof handleSubmit).toBe('function')
  })
})
