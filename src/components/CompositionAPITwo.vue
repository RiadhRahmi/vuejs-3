<template>
    <p>Message: {{ myvar }}</p>
    <button @click="increment()">increment</button>
    <br />
    <br />
    <br />
    <div>Count: {{ state.counter.currentValue }}</div>
    <p v-if="isCounterBlocked === true">The counter has reached the max</p>
    <button @click="incrementTwo()">increment two</button>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import state from "./state";


export default defineComponent({
    setup() {
        // comme data dans l'options api
        const myvar = ref<number>(1);


        // on crée une computed property pour lire le state
        const isCounterBlocked = computed(() => {
            return state.counter.currentValue >= state.counter.max;
        });

        // définition d'une méthode
        function increment(): number {
            return myvar.value++;
        }

        function incrementTwo() {
            // if (state.counter.currentValue < state.counter.max) {
            //     state.counter.currentValue++;
            // } else {
            //     console.log("The counter has reached the maximum");
            // }

            // on utilise ici la computed prop
            if (!isCounterBlocked.value === true) {
                state.counter.currentValue++;
            } else {
                console.log("The counter has reached the maximum");
            }
        }

        // l'objet retourné contenant les éléments qui
        // seront exposés dans le template
        return {
            myvar,
            increment,
            state,
            incrementTwo,
            isCounterBlocked
        }
    }
});
</script>