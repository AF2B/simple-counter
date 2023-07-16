import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../../App.vue'

describe('App', () => {
  it('renders correctly', () => {
    const result = mount(App).html()
    expect(result).toMatchSnapshot()
  })

  it('renders the initial counter value', () => {
    const wrapper = mount(App)
    const counterText = wrapper.find('h2').text()
    expect(counterText).toBe('Counter: 0')
  })

  it('increments the counter on button click', async () => {
    const wrapper = mount(App)
    const incrementButton = wrapper.find('button:nth-child(1)')
    await incrementButton.trigger('click')
    const counterText = wrapper.find('h2').text()
    expect(counterText).toBe('Counter: 1')
  })

  it('decrements the counter on button click', async () => {
    const wrapper = mount(App)
    const decrementButton = wrapper.find('button:nth-child(2)')
    await decrementButton.trigger('click')
    const counterText = wrapper.find('h2').text()
    expect(counterText).toBe('Counter: -1')
  })
})
