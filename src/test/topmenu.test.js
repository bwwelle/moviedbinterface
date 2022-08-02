/* eslint-disable no-undef */
import TopMenu from '../components/TopMenu.vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'

let wrapper

describe('TopMenu create', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  beforeAll(() => {
    wrapper = shallowMount(TopMenu, {
      localVue,
      vuetify,
      mocks: {
      }
    })
  })

  test('Should $emit the genre chosen', async () => {
    wrapper.vm.selectedGenre = [12];
    wrapper.vm.onGenreChange([21]);
    expect(wrapper.vm.selectedGenre).toEqual([21])
    expect(wrapper.emitted().genreChanged).toBeTruthy()
  })

  test('Should set the component variable when the year chosen', async () => {
    wrapper.vm.selectedYear = [2022];
    wrapper.vm.onYearChange([2023]);
    expect(wrapper.vm.selectedYear).toEqual([2023])
  })
})