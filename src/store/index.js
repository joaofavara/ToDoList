import Vue from 'vue';
import Vuex from 'vuex';

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
      console.log('vue.prototype.$http >>> ', Vue.prototype);
      const result = await Vue.prototype.$http.get('/task/toDo');
      commit('getTasksToDo', result.data);
    },
    async getTasksDone({commit}) {
      const result = await Vue.prototype.$http.get('/task/done');
      commit('getTasksDone', result.data);
    },
    async saveTask({commit}, taskTitle) {
      const taskToCrate = {
        title: taskTitle,
        isDone: false,
        softDelete: false,
      }
      return await Vue.prototype.$http.post('/task/saveTask', taskToCrate);
    },
    async softDelete ({commit}, id) {
      const test = await Vue.prototype.$http.post('/task/softDelete', { id });
      console.log('Teste ... ', test);

      return test;
    },
    async updateToDone ({commit}, id) {
      const test = await Vue.prototype.$http.put('/task/updateToDone', { id });
      const result = await Vue.prototype.$http.get('/task/done');

      console.log('Teste 2 ... ', result);
      return test;
    }
  },
  modules: {
  },
});
