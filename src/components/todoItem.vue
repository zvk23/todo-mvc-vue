<template lang="pug">
    div(
        class="todo__item"
        :class="{'is-checked' : todo.complited}"
    )
        label.todo__item-label
            .todo__input-block
                input(
                    type="checkbox"
                    class="todo__item-checkbox"
                    @change="editTodo"
                    :checked="todo.complited"
                    ref="itemInput"
                )
            .todo__item-title {{todo.name}}
        .todo__item-btn-wrapper
            button.todo__item-btn(
                @click="removeTodo"
            ) X
</template>

<script>
export default {
    props: {
        todo: Object
    },
    computed: {
    },
    methods: {
        removeTodo() {
            this.$emit('removeTodo', {...this.todo})
        },
        editTodo() {
            const isChecked = this.$refs.itemInput.checked;
            this.todo.complited = isChecked
            this.$emit('editTodo', {...this.todo})
        }
    }
}
</script>

<style lang="scss" scoped>

.todo__item {
    color: #777777;
    display: flex;
    align-items: center;
    line-height: 1.4em;
    padding: 10px 0;

    &:hover {
        .todo__item-btn {
            opacity: 1;
        }
    }

    &.is-checked {
        .todo__item-title {
            text-decoration: line-through;
        }
    }
}

.todo__item-label {
    display: flex;
    align-items: center;
    flex:1;
}

.todo__input-block {
    display: flex;
    align-items: center;
    width: 60px;
    align-items: center;
    justify-content: center;
}

.todo__item-btn-wrapper {
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.todo__item-btn {
    background: none;
    border: none;
    color: firebrick;
    font-size: 20px;
    cursor: pointer;
    opacity: 0;
    transition: opacity .3s;
}
</style>


