<template>
  <div class="box-to-do-list">
    <div class="stuff">
        <Menu></Menu>
        <router-view ></router-view>
    </div>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue';

export default {
    components: { Menu },
};
</script>

<style lang="scss">
.box-to-do-list {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .stuff {
    width: 70%;
    // height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
}
</style>