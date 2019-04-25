import { getTodosFromLS, setTodoToLS } from '../../helpers/localStorageWorker'

export default {
    namespaced: true,
    state: {
        todos: []
    },
    actions: {
        fetchTodos({commit}) {
            const todos = getTodosFromLS();
            commit('SET_TODOS', todos)
        },
        addTodo({commit}, todo) {
            commit('ADD_TODO', todo)
        },
        removeTodo({commit}, todo) {
            commit('REMOVE_ID', todo)
        },
        editTodo({commit}, editedTodo) {
            commit('EDIT_TODO', editedTodo)
        },
        removeAllTodo({commit}) {
            commit('SET_TODOS', [])
        }
    },
    mutations: {
        'SET_TODOS': (state, todos) => {
            state.todos = todos
        },
        'ADD_TODO': (state, todo) => {
            state.todos.push(todo);
            setTodoToLS(state.todos)
        },
        'REMOVE_ID': (state, todo) => {
            state.todos = state.todos.filter(item => item.id != todo.id)
            setTodoToLS(state.todos)
        },
        'EDIT_TODO': (state, editedTodo) => {
            state.todos = state.todos.map(item => item.id === editedTodo.id ? editedTodo : item)
            setTodoToLS(state.todos)
        }
    },
    getters: {
        todosLength: (state) => {
            return state.todos.length
        }
    }
}