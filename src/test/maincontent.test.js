/* eslint-disable no-undef */
import MainContent from '../components/MainContent.vue'
import DiscoverService from '@/services/discover'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import genres from '@/utilities/genre-mapping.json'
import Vuetify from 'vuetify'

let wrapper
let mainContent

const failureMockResponse = { success: false, data: {} }

describe('MainContent create', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
    document.body.innerHTML = `<div id="test" class="main-content__movies"></div>`;
    mainContent = document.querySelector(".main-content__movies")
  })

  beforeAll(() => {
    wrapper = shallowMount(MainContent, {
      localVue,
      vuetify,
      mocks: {
        blur: true,
        movieImageURL: '',
        genreList: genres
      }
    })
  })

  test('Should call getMovie with poster_path value and under 500 pages', async () => {
    const successfulMockResponse = {
      success: true,
      data: {
        results: [{
          poster_path: null,
          original_title: '',
          release_date: '',
          genre_ids: [35]
        }, {
          poster_path: null,
          original_title: '',
          release_date: '',
          genre_ids: [35]
        }, {
          poster_path: null,
          original_title: '',
          release_date: '',
          genre_ids: [35]
        }, {
          poster_path: null,
          original_title: '',
          release_date: '',
          genre_ids: [35]
        }, {
          poster_path: null,
          original_title: '',
          release_date: '',
          genre_ids: [35]
        }, {
          poster_path: null,
          original_title: '',
          release_date: '',
          genre_ids: [35]
        }, {
          poster_path: null,
          original_title: '',
          release_date: '',
          genre_ids: [35]
        }], total_pages: 200
      }
    }

    DiscoverService.getMovie = jest
      .fn()
      .mockResolvedValue(successfulMockResponse)
    await wrapper.vm.fetchMovieList(50, 'primary_release_date.desc')
    expect(DiscoverService.getMovie).toHaveBeenCalled()
  })

  test('Should call getMovie without poster_path and over 500 pages', async () => {
    const successfulMockResponse = {
      success: true,
      data: {
        results: [{
          poster_path: 'test',
          original_title: '',
          release_date: '',
          genre_ids: []
        }], total_pages: 1000
      }
    }

    DiscoverService.getMovie = jest
      .fn()
      .mockResolvedValue(successfulMockResponse)
    await wrapper.vm.fetchMovieList(50, 'primary_release_date.desc')
    expect(DiscoverService.getMovie).toHaveBeenCalled()
  })

  test('Should call getMovie and return unsuccessfully ', async () => {
    DiscoverService.getMovie = jest
      .fn()
      .mockResolvedValue(failureMockResponse)

    await wrapper.vm.fetchMovieList(50, 'primary_release_date.desc')
    expect(DiscoverService.getMovie).toHaveBeenCalled()
  })

  test('Should hide the blur div at the bottom of the component', () => {
    Object.defineProperties(mainContent, {
      offsetHeight: { value: 100 },
      scrollTop: { value: 100 },
      scrollHeight: { value: 50 }
    })

    window.dispatchEvent(new Event('scroll'))
    expect(wrapper.vm.showBlur).toEqual(false)
  })

  test('Should show the blur div at the bottom of the component', () => {
    Object.defineProperties(mainContent, {
      offsetHeight: { value: 100 },
      scrollTop: { value: 100 },
      scrollHeight: { value: 5000 }
    })

    window.dispatchEvent(new Event('scroll'))
    expect(wrapper.vm.showBlur).toEqual(true)
  })

  test('Should hide the blur div at the bottom of the component when calling fetchMovieList', async () => {
    const successfulMockResponse = {
      success: true,
      data: {
        results: [{
          poster_path: null,
          original_title: '',
          release_date: '',
          genre_ids: [35]
        }, {
          poster_path: null,
          original_title: '',
          release_date: '',
          genre_ids: [35]
        }, {
          poster_path: null,
          original_title: '',
          release_date: '',
          genre_ids: [35]
        }, {
          poster_path: null,
          original_title: '',
          release_date: '',
          genre_ids: [35]
        }, {
          poster_path: null,
          original_title: '',
          release_date: '',
          genre_ids: [35]
        }, {
          poster_path: null,
          original_title: '',
          release_date: '',
          genre_ids: [35]
        }, {
          poster_path: null,
          original_title: '',
          release_date: '',
          genre_ids: [35]
        }, {
          poster_path: null,
          original_title: '',
          release_date: '',
          genre_ids: [35]
        }, {
          poster_path: null,
          original_title: '',
          release_date: '',
          genre_ids: [35]
        }, {
          poster_path: null,
          original_title: '',
          release_date: '',
          genre_ids: [35]
        }, {
          poster_path: null,
          original_title: '',
          release_date: '',
          genre_ids: [35]
        }, {
          poster_path: null,
          original_title: '',
          release_date: '',
          genre_ids: [35]
        }, {
          poster_path: null,
          original_title: '',
          release_date: '',
          genre_ids: [35]
        }, {
          poster_path: null,
          original_title: '',
          release_date: '',
          genre_ids: [35]
        }, {
          poster_path: null,
          original_title: '',
          release_date: '',
          genre_ids: [35]
        }, {
          poster_path: null,
          original_title: '',
          release_date: '',
          genre_ids: [35]
        }], total_pages: 200
      }
    }
    Object.defineProperties(mainContent, {
      offsetHeight: { value: 100 },
      scrollTop: { value: 100, writable: true },
      scrollHeight: { value: 5000 }
    })

    DiscoverService.getMovie = jest
      .fn()
      .mockResolvedValue(successfulMockResponse)

    await wrapper.vm.fetchMovieList(50, 'primary_release_date.desc')
    expect(DiscoverService.getMovie).toHaveBeenCalled()
  })

  test('Should call genreChanged', () => {
    wrapper.vm.refreshMovieList = 1;
    wrapper.vm.genreChanged([90])
    expect(wrapper.vm.selectedGenre).toEqual([90])
    expect(wrapper.vm.refreshMovieList).toEqual(2)
  })
})