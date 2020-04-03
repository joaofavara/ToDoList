<template>
  <div class="menu">
    <div @click="toDoListView" class="button-view" :class="toDoView">
      <span>To Do</span>
      <button
        @click.stop="toggleModal"
        class="button is-link is-small"
        :disabled="!selectedToDoView"
      >Add +</button>
    </div>
    <div @click="doneListView" class="button-view" :class="doneView">
      <span>Done</span>
    </div>
    <modal :openModal="modal" @toggleModal="toggleModal" @createTask="createTask" />
  </div>
</template>

<script>
import Modal from '../components/Modal.vue';
import { mapActions,mapState } from 'vuex';

export default {
  components: { Modal },
  data() {
    return {
      selectedToDoView: true,
      selectedDoneView: false,
      pageView: '',
      modal: false,
    };
  },
  created() {
      const view = this.$router.currentRoute.path;
      this.pageView = view.split('/')[1];
      if (this.pageView === 'todo') {
        this.selectedToDoView = true;
        this.selectedDoneView = false;
      } else {
        this.selectedToDoView = false;
        this.selectedDoneView = true;
      }
  },
  computed: {
    ...mapState({
        tasksToDo: state => state.tasksToDo,
        tasksDone: state => state.tasksDone,
    }),
    toDoView() {
      return {
        "selected-view": this.selectedToDoView,
        "not-selected-view": !this.selectedToDoView
      };
    },
    doneView() {
      return {
        "selected-view": this.selectedDoneView,
        "not-selected-view": !this.selectedDoneView
      };
    }
  },
  methods: {
    ...mapActions([
      'saveTask',
    ]),
    toDoListView() {
      if (this.pageView !== 'todo') {
          this.selectedToDoView = true;
          this.selectedDoneView = false;
          this.pageView = 'todo';
          this.$router.push('/todo');
      }
    },
    doneListView() {
        if( this.pageView !== 'done') {
            this.selectedToDoView = false;
            this.selectedDoneView = true;
            this.pageView = 'done';
            this.$router.push('/done');
        }
    },
    toggleModal() {
        this.modal = !this.modal;
    },
    createTask(task) {
      this.$router.go()
      this.saveTask(task);
      this.toggleModal();
    }
  }
};
</script>

<style lang="scss">
  .menu {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    .button-view {
      border-right: 0.5px solid gray;
      border-left: 0.5px solid gray;
      border-top: 0.5px solid gray;
      margin: 0;
      padding: 6px 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 8px 8px 0px 0px;

      .button {
          margin-left: 10px;
          background-color: #78a9ff;
      }

      &.selected-view {
        background-color: #dde1e6;
      }

      &.not-selected-view {
        background-color: rgba(94, 94, 94, 0.534);
      }
    }
  }
</style>