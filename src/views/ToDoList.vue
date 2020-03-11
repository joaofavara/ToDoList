<template>
  <div class="main">
    <div class="to-do-list">
        <div class="box-name">
            TO DO
        </div>
        <div class="box-todo">

        </div>
    </div>

  </div>
</template>

<script>

</script>

<style lang="scss">
    .main {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid red;

        .to-do-list {
            width: 50%;
            height: 70%;
            border: 1px solid red;

            .box-name {
                padding: 20px;
                width:20%;
                border: 1px solid green;
            }

            .box-todo {
                width: 100%;
                // padding: 100px;
                border: 1px solid blue;
            }

            
        }
    }

</style>