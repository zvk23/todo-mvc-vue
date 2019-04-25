<template lang="pug">
     .todo__input-wrapper
        .todo__input-errors {{ validation.firstError()}}
        div(
            @click="checkAllTodos"
            class="todo__check-all-btn"
            :class="{'is-disabled' : todosLength == 0}"
        )
        input(
            v-model="todo.name"
            @keydown.enter="addNewTodo"
            :class="{'is-error' : validation.hasError('todo.name')}"
            class="todo__input"
            type="text",
            placeholder="Todo Name"
            autofocus
        )
</template>

<script>
import SimpleVueValidator from "simple-vue-validator";
import { mapActions, mapState, mapGetters } from 'vuex'
import { getUniqId } from '../helpers/generateUniqId.js'

const Validator = SimpleVueValidator.Validator;
export default {
	mixins: [SimpleVueValidator.mixin],
	validators: {
		"todo.name"(value) {
			return Validator.value(value).required('Поле не может быть пустым');
		}
	},
	data() {
		return {
			todo: {
				id: getUniqId(this.todosLenght),
				name: "",
				complited: false
			}
		};
	},
	props: {
		// todosLenght: Number
	},
	computed: {
		...mapGetters('todos', ['todosLength'])
	},
	methods: {
		...mapActions('todos', ['addTodo']),
		addNewTodo() {
			this.$validate().then(success => {
				if (!success) return
                else {
                    let id = getUniqId(this.todosLength)
					this.todo.id = id;
					this.addTodo({...this.todo})
					this.todo.name = "";
                    this.validation.reset()
                }
			});
		},
		checkAllTodos() {
			this.$emit("checkAllTodos");
		}
	},
	created() {
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
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: 50%;
	cursor: pointer;
	transition: opacity 0.3s;

	&.is-disabled {
		pointer-events: none;
		opacity: 0.3;
	}

	&:before,
	&:after {
		display: block;
		content: "";
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
	box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
	line-height: 1.4em;
	outline: none;
	color: inherit;
	width: 100%;
    border: 1px solid transparent;

    &.is-error {
        border: 1px solid #cf9292;
    }

    &:placeholder {
        color: rgb(0, 0, 0);
    }
}

.todo__input-errors {
    padding: 10px 0;
    color: #cf9292;
    position: absolute;
    top: -50px;
    text-align: center;
    width: 100%;
}
</style>


