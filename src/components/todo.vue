<template lang="pug">
    .todo
        todo-input
        todo-list
</template>

<script>
import todoInput from './todoInput'
import todoList from './todoList'

export default {
    components: {
        todoInput,
        todoList
    }
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


