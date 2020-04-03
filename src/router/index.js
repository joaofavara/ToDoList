import Vue from 'vue';
import VueRouter from 'vue-router';
// import ToDoList from '@/views/ToDoList.vue';
const NewToDoList = () => import('@/views/NewToDoList.vue');
const ListTaskToDo = () => import('@/components/ListTaskToDo.vue');
const ListTaskDone = () => import('@/components/ListTaskDone.vue');
const ProgressBar = () => import('@/components/ProgressBar.vue');

Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/',
  //   name: 'ToDoList',
  //   component: ToDoList,
  // },
  {
    path: '/',
    name: 'NewToDoList',
    component: NewToDoList,
    children: [
      { path: 'todo', component: ListTaskToDo },
      { path: 'done', component: ListTaskDone },
    ],
  },
  {
    path: '/progressBar',
    component: ProgressBar,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
