import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    fruits: [
      {
        'tid': '1',
        'name': 'apple'
      },
      {
        'tid': '2',
        'name': 'banana'
      },
      {
        'tid': '3',
        'name': 'melon'
      },
      {
        'tid': '4',
        'name': 'grape'
      },
      {
        'tid': '5',
        'name': 'blackberry'
      }
    ]
  },
  mutations: {
    removeFruit (state, index) {
      state.fruits.splice(index, 1)
    }
  }
})

export default store
