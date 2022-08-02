/* eslint-disable no-undef */
import RecentlyPlayed from '../components/RecentlyPlayed.vue'
import MovieService from '@/services/movie'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'

let wrapper

const failureMockResponse = { success: false, data: {} }

const successfulMockResponse = {
  success: true,
  data: {
    results: [{
      poster_path: null,
      original_title: '',
      release_date: '',
      genre_ids: [35]
    }]
  }
}
const spyfetchBackdrops = jest.spyOn(RecentlyPlayed.methods, 'fetchBackdrops')
describe('RecentlyPlayed create', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  test('Should call fetchBackdrops with successful response', async () => {
    MovieService.getById = jest.fn().mockImplementation(() => Promise.resolve(successfulMockResponse))

    wrapper = shallowMount(RecentlyPlayed, {
      localVue,
      vuetify,
      mocks: {
        recentlyPlayed: [
          { playing: false, id: 400650 },
          { playing: false, id: 10191 },
          { playing: true, id: 369972 }
        ],
      }
    })
    expect(spyfetchBackdrops).toHaveBeenCalled()
  })

  test('Should call fetchBackdrops with failed response', async () => {
    MovieService.getById = jest.fn().mockImplementation(() => Promise.resolve(failureMockResponse))

    wrapper = shallowMount(RecentlyPlayed, {
      localVue,
      vuetify,
      mocks: {
        recentlyPlayed: [
          { playing: false, id: 400650 },
          { playing: false, id: 10191 },
          { playing: true, id: 369972 }
        ],
      }
    })
    expect(spyfetchBackdrops).toHaveBeenCalled()
  })
})