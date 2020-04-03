<template>
  <div class="task-list">
    <div v-if="!isFetching && !isLoading" class="not-task">
      <span>Do not have tasks</span>
    </div>
    <div v-show="!isLoading" class="task-to-do" v-for="task in tasksToDo" :key="task._id">
      <div class="task">
        <span class="task-title-to-do">{{ task.title }}</span>
        <div class="buttons-todo">
          <button class="button complete is-small" @click="updateToDoneTaks(task._id)">Complete</button>
          <button class="button remove is-small" @click="softDeleteTask(task._id)">Remove</button>
        </div>
      </div>
      <hr />
    </div>
    <progress-bar v-show="isLoading" />
  </div>
</template>

<script>
import mixinProgressBar from "../mixin/progress-bar";
import { mapState, mapActions } from "vuex";

export default {
  data(){
    return {
      isFetching: true,
    }
  },
  mixins: [mixinProgressBar],
  computed: {
    ...mapState({
      tasksToDo: state => state.tasksToDo
    })
  },
  methods: {
    ...mapActions(["getTasksToDo", "softDelete", "updateToDone"]),
    async softDeleteTask(id) {
      await this.softDelete(id);
      await this.getTasksToDo();
      this.$router.go()
    },
    async updateToDoneTaks(id) {
      await this.updateToDone(id);
      await this.getTasksToDo();
      this.$router.go();
    }
  },
  async mounted() {
    await this.getTasksToDo();
    this.isFetching = this.tasksToDo.length === 0 ? false : true;
  }
};
</script>

<style lang="scss">
.task-list {
  width: 100%;
  flex-direction: column;
  border: 1px solid gray;
  display: flex;
  overflow-y: scroll;
  height: 380px;
  border-radius: 0px 8px 8px 8px;

  .not-task {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 3rem;
    font-weight: 150;
  }

  .task-to-do {
    display: flex;
    flex-direction: column;

    .task {
      width: auto;
      // height: fit-content;
      padding: 10px;
      display: flex;
      justify-content: space-between;

      .task-title-to-do {
        width: 90%;
        padding: 5px;
        overflow-y: scroll;
        height: 80px;
      }

      .buttons-todo {
        display: flex;
        width: fit-content;
        height: fit-content;
        flex-direction: column;
        justify-content: space-between;

        button {
          margin: 5px;
          border-radius: 8px;

          &.complete {
            background-color: #a7f0ba;
          }

          &.remove {
            background-color: #ff8389;
          }
        }
      }
    }
  }
}

hr {
  background-color: black;
  border-style: inset;
  border-width: 1px;
  width: 80%;
  margin: 0.5em auto;
}
</style>