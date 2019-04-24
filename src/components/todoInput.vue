<template lang="pug">
     .todo__input-wrapper
        div(
            @click="checkAllTodos"
            class="todo__check-all-btn"
            :class="{'is-disabled' : todosLenght == 0}"
        )
        input(
            type="text",
            placeholder="Todo Name"
            autofocus
            class="todo__input"
            v-model="todo.name"
            @keydown.enter="addNewTodo"
        )
</template>

<script>
let uniqId = 0;
export default {
    data() {
        return {
            todo: {
                id: uniqId,
                name: '',
                complited: false,
            }
        }
    },
    props: {
        todosLenght: Number
    },
    methods: {
        addNewTodo() {
            uniqId++
            this.todo.id = uniqId
            this.$emit('addTodo', {...this.todo})
            this.todo.name = ''
        },
        checkAllTodos() {
            this.$emit('checkAllTodos')
        }
    }
};
</script>

<style lang="scss" scoped>
.todo__input-wrapper {
    position: relative;
}

.todo__check-all-btn {
    position: absolute;
    top: 50%;
    left: 20px;
    margin-top: -10px;
    width: 20px;
    height: 20px;
    border: 1px solid rgba(0,0,0, 0.3);
    border-radius: 50%;
    cursor: pointer;
    transition: opacity .3s;

    &.is-disabled {
        pointer-events: none;
        opacity: 0.3;
    }

    &:before,
    &:after {
        display: block;
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 8px;
        height: 1px;
        background-color: rgb(101, 141, 101);
    }

    &:before {
        transform-origin: right;
        transform: rotate(45deg);
        margin-left: -8px;
        margin-top: 3px;
    }

    &:after {
        transform-origin: left;
        transform: rotate(-45deg);
        margin-left: 0px;
        margin-top: 3px;
    }
}

.todo__input {
	font-size: 24px;
    padding: 16px 16px 16px 60px;
    border: none;
    background: #fff;
    box-shadow: inset 0 -2px 1px rgba(0,0,0, 0.03);
    line-height: 1.4em;
    outline: none;
    color: inherit;
    width: 100%;
}
</style>


