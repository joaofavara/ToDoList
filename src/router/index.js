import Vue from 'vue';
import VueRouter from 'vue-router';
import ToDoList from '../views/ToDoList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'ToDoList',
    component: ToDoList,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
