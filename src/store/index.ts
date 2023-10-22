// store/index.ts

import { createStore } from 'vuex';

interface State {
    count : number
}

const store = createStore({
    state: {
        count: 0,
    },
    getters: {
        // Описуйте геттери тут
    },
    mutations: {
        increment(state:State){
            state.count = state.count + 1
        }
    },
    actions: {
        // Описуйте дії тут
    },
    modules: {
        // myModule,
        // Додайте інші модулі, якщо потрібно
    },
});

export default store;