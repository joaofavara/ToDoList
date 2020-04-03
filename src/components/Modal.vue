<template>
  <div class="modal" :class="{ 'is-active': openModal}">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="field">
        <div class="control">
          <span>Task: </span>
          <input class="input" v-model="task" type="text" placeholder="Task ... ">
          <div class="button-box">
            <button class="button save is-normal" v-on:click="createTask()">Save</button>
            <button class="button cancel is-normal" v-on:click="toggleModal()">Cancel</button>
          </div>
        </div>
    </div>
    </div>
    <button class="modal-close is-large" v-on:click="toggleModal()" aria-label="close"></button>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: ['openModal'],
  data() {
    return {
      task: null,
    }
  },
  methods: {
    toggleModal() {
      this.$emit('toggleModal')
    },
    createTask() {
      console.log('task >>> ', this.task);
      this.$emit('createTask', this.task);
      this.task = null;
    },
  },
};
</script>

<style lang="scss">
    .modal-content {
       background-color: white;
       border-radius: 8px;
       padding: 20px;
       width: 60%;

       .button-box {
        // border: 1px solid red;
        margin-top: 10px;
        display: flex;
        justify-content: flex-end;
        
        button {
          border-radius: 8px;
          margin: 3px;

          &.save {
            background-color: #a7f0ba;
          }

          &.cancel {
            background-color: #ff8389;
          }
        }
       }

    }
</style>