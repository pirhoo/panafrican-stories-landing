<template>
  <div class="main-header">
    <div class="main-header__brand">
      <img src="../assets/logo.png" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MainHeader'
  }
</script>

<style lang="scss">
  @import '../variables.scss';
  @import '../../node_modules/bootstrap/scss/_mixins';

  .main-header {
    display: flex;
    flex-direction: column;
    justify-content: center;

    @include media-breakpoint-down(sm) {
      text-align: center;
      align-items: center;
      height: 101px;
    }

    &__brand img {
      height: auto;
      width: auto;

      @include media-breakpoint-down(sm) {
        height: 53px;
      }
    }
  }
</style>
