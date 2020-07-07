<template>
  <div class="main-header">
    <div class="main-header__brand">
      <img src="../assets/logo.png" srcset="../assets/logo.png 1x, ../assets/logo@2x.png 2x" alt="Panafrican Stories" />
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
      height: 93px;

      @include media-breakpoint-down(sm) {
        height: 53px;
      }
    }
  }
</style>
