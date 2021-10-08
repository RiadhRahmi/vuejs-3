<template>
    <p>count = {{ count }}.</p>
    <button @click="updateCount(1)">Increment</button>
    <br />
    <p>La date stockée dans Vuex est le {{ formattedDate }}.</p>
    <ul>
        <li>year : {{ customYear }}</li>
        <li>month : {{ uniqueMonth }}</li>
        <li>day : {{ day }}</li>
    </ul>
    <ul>
        <li v-for="todo in todos" :key="todo.id">{{ todo.task }}</li>
    </ul>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
    computed: {
        todos() {
            return this.$store.getters.getTodos;
        },
        // ...mapGetters(['getTodos']),
        ...mapGetters(['formattedDate']),
        // this.$store.state.day
        ...mapState({
            customYear: 'year',
            uniqueMonth: 'month',
            day: 'day',
            count: 'count',

        }),

    },
    methods: {
        // ...mapActions(['updateCount'], 1)
        ...mapActions({
            updateCount: 'updateCount'
        })
        // sendUpdateCountAction() {
        //     this.$store.dispatch('updateCount', 1)
        //     store.dispatch('updateCount', 1)
        // }
    }
};
</script>