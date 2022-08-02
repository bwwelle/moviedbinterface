/* eslint-disable no-undef */
import MovieList from '../components/MovieList.vue'
import DiscoverService from '@/services/discover'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import genres from '@/utilities/genre-mapping.json'
import Vuetify from 'vuetify'

let wrapper
const successfulMockResponse = {
  success: true,
  data: [{
    poster_path: 'test',
    original_title: 'test',
    release_date: '',
    genre_ids: [35]
  }], total_pages: 1
}

const failureMockResponse = { success: false, data: {} }

DiscoverService.getMovie = jest
  .fn()
  .mockResolvedValue(successfulMockResponse)
const spySetMovieList = jest.spyOn(MovieList.methods, 'setMovieList')
const localVue = createLocalVue()
let vuetify

beforeEach(() => {
  vuetify = new Vuetify()
})

describe('MovieList create', () => {
  test('Should call setMovieList with failed MovieListCall', async () => {
    wrapper = shallowMount(MovieList, {
      localVue,
      vuetify,
      mocks: {
        blur: true,
        movieImageURL: '',
        genreList: genres
      },
      propsData: {
        movieListCall: jest.fn().mockImplementation(() => Promise.resolve(failureMockResponse))
      }
    })

    expect(spySetMovieList).toHaveBeenCalled();
  })
})

describe('MovieList create with successful calls to get the movie list', () => {
  beforeAll(() => {
    wrapper = shallowMount(MovieList, {
      localVue,
      vuetify,
      mocks: {
        blur: true,
        movieImageURL: '',
        genreList: genres
      },
      propsData: {
        movieListCall: jest.fn().mockImplementation(() => Promise.resolve(successfulMockResponse))
      }
    })
  })

  test('Should call setMovieList', async () => {
    expect(spySetMovieList).toHaveBeenCalled();
  })

  test('Should call openDialog and set the dialog values', async () => {
    wrapper.vm.openDialog({
      backdropPath: null,
      title: 'test',
      releaseDate: '',
      genre: '35',
      description: 'test too'
    })
    expect(wrapper.vm.dialogMovieTitle).toEqual('test');
    expect(wrapper.vm.dialogMovieDescription).toEqual('test too');
  })

  test('Should trigger call onPageClick and update the currentPage', async () => {
    wrapper.vm.onPageClick(3)
    expect(wrapper.vm.currentPage).toEqual(3);
  })

  test('Should call toggleTitleAscSort and update title sort to ascending', async () => {
    wrapper.vm.titleSortAscendingToggle = true
    wrapper.vm.toggleTitleAscSort();
    expect(wrapper.vm.titleSortAscendingToggle).toEqual(false);
  })

  test('Should call toggleDateAscSort and update date sort to ascending', async () => {
    wrapper.vm.dateSortAscendingToggle = true;
    wrapper.vm.toggleDateAscSort();
    expect(wrapper.vm.dateSortAscendingToggle).toEqual(false);
  })

  test('Should call onSortClick and update title sort', async () => {
    wrapper.vm.onSortClick({ field: 'original_title', direction: 'asc' });
    expect(wrapper.vm.sortBy).toEqual(`original_title.asc`);
  })

  test('Should call onSortClick and update date sort', async () => {
    wrapper.vm.onSortClick({ field: 'primary_release_date', direction: 'asc' });
    expect(wrapper.vm.sortBy).toEqual(`primary_release_date.asc`);
  })
})

