import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      // {
      //   id: '1', text: 'Recolectar las pidras del infinito', completed: false
      // },
      // {
      //   id: '2', text: 'Piedra del alma', completed: true
      // }, 
      // {
      //   id: '3', text: 'Piedra del poder', completed: true
      // },
      // {
      //   id: '4', text: 'Piedra realidad', completed: false
      // }, 
      // {
      //   id: '5', text: 'Conseguir nuevos secuaces', completed: false
      // },
    ],
    idx: 0
  },
  getters: {

    pendingTodos( state ) {
      return state.todos.filter( todo => !todo.completed )
    },

    allTodos: ( state ) => {
      return state.todos
    },

    completedTodos: ( state ) => {
      return state.todos.filter( todo => todo.completed )
    },

    getTodosByTab: ( _ , getters ) => ( tab ) => {
      
      switch( tab ) {
        case 'all': return getters.allTodos
        case 'pending': return getters.pendingTodos
        case 'completed': return getters.completedTodos
      }

    }
  },
  mutations: {

    toggleTodo(state, id) {
      const todoIdx = state.todos.findIndex( todo => todo.id === id )
      state.todos[todoIdx].completed = !state.todos[todoIdx].completed
    },

    deleteEntry( state, id ) {
      const todoIdx = state.todos.findIndex( todo => todo.id === id )
      console.log(todoIdx)
      
      state.todos.splice(todoIdx, todoIdx+1)
    },

    deleteAllEntries( state ) {
      
      const newEntries = state.todos.filter( todo => !todo.completed )
      state.todos = newEntries
    },

    addEntry( state, text) {
      console.log(text)
      const id = state.idx++
      
      const entry = { 
        id, 
        text, 
        completed: false 
      }
      console.log(entry)
      state.todos = [ entry , ...state.todos ]
    }
  },
  actions: {
  },
  modules: {
  }
})
