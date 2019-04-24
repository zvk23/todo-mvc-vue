<template lang="pug">
     .todo__input-wrapper
        input(
            type="text",
            placeholder="Todo Name"
            autofocus
            class="todo__input"
        )
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
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


