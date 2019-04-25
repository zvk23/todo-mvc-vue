<template lang="pug">
    .todo__list-wrapper
        .todo__list-content
            ul.todo__list
                li.todo__list-item(
                    v-for="todo in todos"
                    :key="todo.id"
                )
                    todo-item(
                        :todo="todo"
                        @removeTodo="removeTodo"
                        @editTodo="editTodo"
                    )
        
        .todo__list-footer
            .todo__item-counter {{counter}} item left
            .todo__list-filter
                todoListFilter(
                    @filterTodos="filterTodos"
                )
            .todo__clear-all-btn 
                button(
                    v-if="allIsChecked"
                    @click="removeCheckedTodods"
                    type="button"
                ) Clear checked todos
</template> 

<script>
import todoItem from "./todoItem";
import todoListFilter from "./todoListFilter";
import { mapActions, mapState } from 'vuex'

export default {
	components: {
		todoItem,
        todoListFilter
	},
    props: {
        todos: Array,
        allIsChecked: Boolean
    },
    computed: {
        counter: function () {
            return this.todos.length
        }
    },
    methods: {
        ...mapActions('todos', ['removeAllTodo']),
        removeTodo(todo) {
            this.$emit('removeTodo', todo)
        },
        editTodo(todo) {
            this.$emit('editTodo', todo)
        },
        filterTodos(filter) {
            this.$emit('filterTodos', filter)
        },
        removeCheckedTodods() {
            this.removeAllTodo()
        }
    }
};
</script>

<style lang="postcss" scoped>
.todo__list {
	background-color: #ffffff;
	font-size: 24px;
	border-bottom: 1px solid #ededed;
}

.todo__list-item {
    border-bottom: 1px solid #ededed;
}

.todo__list-item:last-child {
    border-bottom: none;
}

.todo__list-footer {
    color: #777777;
    padding: 10px 15px;
    text-align: center;
    position: relative;
    font-size: 14px;
    display: flex;
    align-items: center;
}

.todo__list-filter {
    margin: 0 auto;
}
</style>

