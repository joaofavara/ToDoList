import Vue from 'vue';
import Vuex from 'vuex';
import Axios from '../axios/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasksToDo: null,
    tasksDone: null,
  },
  mutations: {
    getTasksToDo(state, task) {
      state.tasksToDo = task;
    },
    getTasksDone(state, task) {
      state.tasksDone = task;
    },
  },
  actions: {
    async getTasksToDo({commit}) {
      const result = await Axios.get('/api/task/toDo');
      commit('getTasksToDo', result.data);
    },
    async getTasksDone({commit}) {
      const result = await Axios.get('/api/task/done');
      commit('getTasksDone', result.data);
    },
    async saveTask({commit}, taskTitle) {
      const taskToCrate = {
        title: taskTitle,
        isDone: false,
        softDelete: false,
      }
      return await Axios.post('/api/task/saveTask', taskToCrate);
    },
    async softDelete ({commit}, id) {
      const test = await Axios.post('/api/task/softDelete', { id });
      console.log('Teste ... ', test);

      return test;
    },
    async updateToDone ({commit}, id) {
      const test = await Axios.put('/api/task/updateToDone', { id });
      const result = await Axios.get('/api/task/done');

      console.log('Teste 2 ... ', result);
      return test;
    }
  },
  modules: {
  },
});
