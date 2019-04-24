<template lang="pug">
    .todo
        todo-input(
            :todosLenght="filteredTodos.length"
            @checkAllTodos="checkAllTodos"
        )
        todo-list(
            v-if="todos.length"
            :todos="filteredTodos"
            :allIsChecked="allIsChecked"
            @removeTodo="removeTodo"
            @editTodo="editTodo"
            @filterTodos="filterTodos"
            @removeCheckedTodods="removeCheckedTodods"
        )
</template>

<script>
import todoInput from './todoInput'
import todoList from './todoList'
import { mapActions, mapState } from 'vuex'

export default {
    components: {
        todoInput,
        todoList
    },
    data() {
        return {
            filter: 'all'
        }
    },
    computed: {
        ...mapState('todos', {
           todos: (state) => state.todos 
        }),
        filteredTodos() {
            if (this.filter === 'all') {
                return this.todos
            } else if (this.filter === 'complited') {
                return this.todos.filter(item => item.complited === true)
            } else if (this.filter === 'active') {
                return this.todos.filter(item => item.complited === false)
            }
        },
        allIsChecked() {
            return this.todos.every(item => item.complited === true);
        }
    },
    methods: {
        addTodo(todo) {
            this.todos.push(todo)
        },
        removeTodo(todo) {
            this.todos = this.todos.filter(item => item.id != todo.id)
        },
        editTodo(todo) {
           this.todos =  this.todos.map(item => item.id != todo.id ? item : todo)
        },
        filterTodos(filter) {
            this.filter = filter;
        },
        checkAllTodos() {
            this.todos.forEach(item => item.complited = true)
        },
        removeCheckedTodods() {
            this.todos = this.todos.filter(item => !item.complited)
        }
    },
}
</script>

<style lang="postcss" scoped>
.todo {
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    box-shadow: 0 4px 10px -4px rgba(0,0,0, 0.3);
    background-color: #fff;
}

.main-title {
    font-size: 72px;
    color: rgba(255, 149, 149, 0.3);
    font-weight: 300;
    margin: 0;
}
</style>


