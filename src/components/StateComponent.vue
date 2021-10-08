<template>
    <div>Count: {{ state.counter.currentValue }}</div>
</template>
            
<script lang="ts">
import { defineComponent } from "vue";
import state from "./state";

export default defineComponent({
    setup() {
        return {
            state,
        };
    },
});
</script>      