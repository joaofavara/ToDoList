<template>
  <div class="progress-bar">
    <progress class="progress is-small"></progress>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss'>
.progress-bar {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .progress {
    text-align: center;
    width: 80%;
    display: flex;
    justify-content: center;

    :before {
        content: attr(data-text);
    }

    &:indeterminate {
        background-image: linear-gradient(to right, #a56eff 30%, #ededed 30%);
    }
    
  }
}
</style>