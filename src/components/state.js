import { reactive } from "vue";

// ce state pourra être importé dans les composants
const state = reactive({
  counter: {
    currentValue: 1,
    max: 10,
  },
});

export default state;
