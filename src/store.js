import { createStore } from 'vuex'


const store = createStore({
  state() {
    return {
      todos: ['demo todo']
    }
  },
  mutations: {
    addTodo(state, newTodo) {
        state.todos.push(newTodo);
    },
    removeTodo(state, index) {
        state.todos.splice(index, 1);
    },
  },
  actions: {
    addTodo(context, payload) {
        context.commit('addTodo', payload.newTodo);
    },
    removeTodo(context, index){
        context.commit('removeTodo', index);
    },
  }
})

export default store;