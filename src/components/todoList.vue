<template lang="pug">
    .todo__list-wrapper
        .todo__list-content
            ul.todo__list
                li.todo__list-item
                    todo-item
        
        .todo__list-footer
            .todo__item-counter 10 item left
            .todo__list-filter
</template> 

<script>
import todoItem from "./todoItem";

export default {
	components: {
		todoItem
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
}
</style>

