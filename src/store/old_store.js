import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      todos: [],
      month: 8,
      day: 12,
      year: 2008,
      count: 0,
    };
  },
  mutations: {
    // here just we mutate the state

    addTodo(state, item) {
      state.todos.unshift(item);
    },
    INCREASE_COUNT(state, amount = 1) {
      state.count += Number(amount);
    },
    DECREASE_COUNT(state, amount = 1) {
      state.count -= Number(amount);
    },
  },
  getters: {
    getTodos(state) {
      return state.todos;
    },
    todoCount(state) {
      return state.todos.length;
    },
    formattedDate: (state) => {
      return `${state.day}-${state.month}-${state.year}`;
    },
  },
  actions: {
    // here we can call apis and ...

    updateCount(context, amount) {
      if (amount >= 0) {
        context.commit("INCREASE_COUNT", amount);
      } else {
        context.commit("DECREASE_COUNT", amount);
      }
    },
  },
});
