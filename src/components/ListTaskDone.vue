<template>
  <div class="task-list">
    <div v-if="!isFetching && !isLoading" class="not-task">
      <span>Do not have tasks</span>
    </div>
    <div v-show="!isLoading" class="task-done" v-for="item in tasksDone" :key="item._id">
      <div class="task">
        <span class="task-title-done">{{ item.title }}</span>
      </div>
      <hr />
    </div>
    <progress-bar v-show="isLoading"/>
  </div>
</template>

<script>
import mixinProgressBar from "../mixin/progress-bar";
import { mapState, mapActions } from "vuex";

export default {
  mixins: [mixinProgressBar],
  computed: {
    ...mapState({
      tasksDone: state => state.tasksDone
    })
  },
  data() {
    return {
        isFetching: true,
    };
  },
  methods: {
    ...mapActions(["getTasksDone"])
  },
  async mounted() {
    await this.getTasksDone();
    this.isFetching = this.tasksDone.length === 0 ? false : true;

  }
};
</script>

<style lang="scss">
.task-list {
  background: white;
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

  .task-done {
    display: flex;
    flex-direction: column;

    .task {
      width: 100%;
      padding: 10px;
      display: flex;
      justify-content: space-between;

      .task-title-done {
        width: 100%;
        padding: 5px;
        overflow-y: scroll;
        height: 80px;
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