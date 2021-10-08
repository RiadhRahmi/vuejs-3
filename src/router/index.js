import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/Home.vue";
import AddTask from "../views/AddTask/AddTask.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add_task",
    name: "AddTask",
    component: AddTask,
  },
];

const router = createRouter({
  history: createWebHistory("http://localhost:3000/"),
  routes,
});

console.log("history", "http://localhost:3000/");

export default router;
