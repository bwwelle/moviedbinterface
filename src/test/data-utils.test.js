/* eslint-disable no-undef */
import { mapToSelectData } from '@/utilities/data-utils.js'

describe('Data Utils tests', () => {
  test('Should map the data for use in select boxes', () => {
    expect(mapToSelectData(['test1', 'test2'])).toEqual([{ text: 'test1', value: 'test1' }, { text: 'test2', value: 'test2' }]);
  })
})