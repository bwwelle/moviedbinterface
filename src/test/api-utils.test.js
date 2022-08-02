/* eslint-disable no-undef */
import { generateQuery, getImage, apiMovieDB } from '@/utilities/api-utils.js'
const axios = require("axios");

const context = {
  region: 'US',
  certification_country: 'US',
  'vote_count.gte': 2,
  page: 1,
  with_original_language: 'en',
  'primary_release_date.lte': new Date()
    .toJSON()
    .slice(0, 10)
    .replace(/-/g, '-'),
  watch_region: 'US'
}

describe('Api Data Utils tests', () => {
  test('Should format correctly for a query to the API', () => {
    const output = `?api_key=undefined&language=en-US&region=US&certification_country=US&vote_count.gte=2&page=1&with_original_language=en&primary_release_date.lte=2022-08-02&watch_region=US`

    expect(generateQuery(context)).toEqual(output);
  })

  test('Should not use all the options when id is one of the options', () => {
    const output = `?api_key=undefined&language=en-US`

    expect(generateQuery({ id: 12 })).toEqual(output);
  })

  test('Should format correctly for a query to the API if nothing is sent to it', () => {
    const output = `?api_key=undefined&language=en-US`
    expect(generateQuery()).toEqual(output);
  })

  test('Should format the url correctly for the image', () => {
    const output = `http://image.tmdb.org/t/p/12/test`
    expect(getImage({
      size: 12, file: 'test'
    })).toEqual(output);
  })

  test('Should create a connection to the Movie DB API', () => {
    const axiosMock = axios
    axiosMock.create = jest.fn()
    axiosMock.create.mockReturnValue(axiosMock)

    expect(apiMovieDB()).toEqual(axiosMock);
  })
})