<template lang="pug">
    .todo__filter
        button.todo__filter-btn(
            v-for="filter in filters"
            :key="filter"
            :class="{'is-active': currentFilter === filter}"
            @click="setMode(filter)"
        ) {{ filter }}
</template>

<script>
export default {
    data() {
        return {
            filters: ['all', 'active', 'complited'],
            currentFilter: 'all'
        }
    },
    methods: {
        setMode(filter) {
            this.currentFilter = filter
            this.$emit('filterTodos', filter)
        }
    }
};
</script>

<style lang="scss" scoped>
.todo__filter {
	display: flex;
	align-items: center;
}

.todo__filter-btn {
    color: #777777;
    font-size: 14px;
    background: none;
    border: 1px solid transparent;
    border-radius: 5px;
    margin-right: 20px;
    transition: color .3s, border-color .3s;
    outline: none;
    cursor: pointer;

    &.is-active {
        color: #777;
        border-color: #777;
    }
}
</style>

