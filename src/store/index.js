import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: 'BATATA',
  },
  mutations: {
    getTasks(state, task) {
      // console.log('mutation: ', tasks);
      state.tasks = task;
    }
  },
  actions: {
    async getTasks({commit}) {
      const result = await Axios.get('http://localhost:3000/api/task');
      commit('getTasks', result.data);
    },
    async saveTask({commit}, taskTitle) {
      console.log('taskTitle >>> ', taskTitle);
      const taskToCrate = {
        title: taskTitle,
        isDone: false,
        softDelete: false,
      }
      const teste = await Axios.post('http://localhost:3000/api/task/saveTask', taskToCrate);
      console.log('taskTitle 2 >>> ', teste);
    }
  },
  modules: {
  },
});
