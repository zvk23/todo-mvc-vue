export default {
    namespaced: true,
    state: {
        todos: []
    },
    actions: {
        addTodo({commit}, todo) {
            commit('ADD_TODO', todo)
        },
        removeTodo({commit}, todo) {
            commit('REMOVE_ID', todo)
        },
        editTodo({commit}, editedTodo) {
            commit('EDIT_TODO', editedTodo)
        }
    },
    mutations: {
        'ADD_TODO': (state, todo) => {
            state.todos.push(todo)
        },
        'REMOVE_ID': (state, todo) => {
            state.todos = state.todos.filter(item => item.id != todo.id)
        },
        'EDIT_TODO': (state, editedTodo) => {
            state.todos = state.todos.map(item => item.id === editedTodo.id ? editedTodo : item)
        }
    }
}