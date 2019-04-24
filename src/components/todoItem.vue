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
                    @change="editCurrentTodo"
                    :checked="todo.complited"
                    ref="itemInput"
                )
            .todo__item-title {{todo.name}}
        .todo__item-btns-wrapper
            router-link(
                tag="button"
                type="button"
                class="todo__item-btn todo__item-btn--link"
                :to="`/view/${todo.name}`"
            ) ->

            button.todo__item-btn.todo__item-btn--remove(
                @click="removeCurrentTodo"
            ) X
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
	props: {
		todo: Object
	},
	computed: {},
	methods: {
		...mapActions('todos', ['removeTodo', 'editTodo']),
		removeCurrentTodo() {
			this.removeTodo(this.todo)
		},
		editCurrentTodo() {
			const isChecked = this.$refs.itemInput.checked;
			this.todo.complited = isChecked;
			this.editTodo(this.todo)
		}
	}
};
</script>

<style lang="scss" scoped>
.todo__item {
	color: #777777;
	display: flex;
	align-items: center;
	line-height: 1.4em;
	padding: 10px 0;

	&:hover {
		.todo__item-btns-wrapper {
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
	flex: 1;
}

.todo__input-block {
	display: flex;
	align-items: center;
	width: 60px;
	align-items: center;
	justify-content: center;
}

.todo__item-btns-wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
    margin-right: 15px;
    opacity: 0;
    transition: opacity .3s;
}

.todo__item-btn {
	&--remove {
		background: none;
		border: none;
		color: firebrick;
		font-size: 20px;
		cursor: pointer;
        margin-left: 10px;
	}
}
</style>


