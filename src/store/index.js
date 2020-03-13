import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

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
      const result = await Axios.get('http://localhost:3000/api/task/toDo');
      commit('getTasksToDo', result.data);
    },
    async getTasksDone({commit}) {
      const result = await Axios.get('http://localhost:3000/api/task/done');
      commit('getTasksDone', result.data);
    },
    async saveTask({commit}, taskTitle) {
      const taskToCrate = {
        title: taskTitle,
        isDone: false,
        softDelete: false,
      }
      await Axios.post('http://localhost:3000/api/task/saveTask', taskToCrate);
    },
    async softDelete ({commit}, id) {
      await Axios.post('http://localhost:3000/api/task/softDelete', { id });
    },
    async updateToDone ({commit}, id) {
      await Axios.put('http://localhost:3000/api/task/updateToDone', { id });
    }
  },
  modules: {
  },
});
