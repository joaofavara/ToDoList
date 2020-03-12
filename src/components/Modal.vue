<template>
  <div class="modal" :class="{ 'is-active': openModal}">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="field">
        <div class="control">
          <textarea v-model="textarea" class="textarea is-primary" placeholder="Task ..."></textarea>
        </div>
        <button class="button is-success is-small is-outlined" v-on:click="createTask()">Create</button>
        <button class="button is-danger is-small is-outlined" v-on:click="toggleModal()">Cancel</button>
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
      textarea: null,
    }
  },
  methods: {
    toggleModal() {
      this.$emit('closeModal')
    },
    createTask() {
      this.$emit('createTask', this.textarea);
      this.textarea = null;
    },
  },
};
</script>

<style lang="scss">
    .modal-content {
       background-color: white;
       width: 60%;
    }
</style>