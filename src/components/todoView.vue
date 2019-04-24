<template lang="pug">
    .todo__view
        button(
            type="button"
            class="todo__item-btn todo__item-btn--link"
            @click="goToHome"
        ) <-
        h1 Компонент просмотра задачи {{ $route.params.todoName }}
</template>

<script>
export default {
    methods: {
        goToHome() {
            this.$router.go(-1 )
        }
    }
}
</script>

<style lang="sass" scoped>

</style>


