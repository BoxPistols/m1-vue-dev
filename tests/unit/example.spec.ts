import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
    it('renders props.msg when passed', () => {
        const msg = 'new message'
        const wrapper = shallowMount(HelloWorld, {
            props: { msg },
        })
        expect(wrapper.text()).toMatch(msg)
    })
})

test('two plus two is four', () => {
    expect(2 + 2).toBe(4)
})