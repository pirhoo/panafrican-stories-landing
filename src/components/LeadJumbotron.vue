<template>
  <div class="lead-jumbotron">
    <div class="lead-jumbotron__coming-soon text-primary">
      Coming Soon
    </div>
    <h1 class="lead-jumbotron__heading">
      Raconter
      <br class="d-none d-lg-block"/>
      l'Afrique autrement
    </h1>
    <p class="lead-jumbotron__desc">
      Reconnectons l'Afrique et sa diaspora à travers les histoires d'afro-descendants.
    </p>
  </div>
</template>

<script>
  export default {
    name: 'LeadJumbotron'
  }
</script>

<style lang="scss">
  @import '../variables.scss';
  @import '../../node_modules/bootstrap/scss/_mixins';

  .lead-jumbotron {
    max-width: 683px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.24);

    @include media-breakpoint-down(sm) {
      text-align: center;
    }

    &__coming-soon {
      font-size: 18px;
      margin-bottom: 16px;
      font-weight: normal;
      text-transform: uppercase;

      @include media-breakpoint-down(sm) {
        font-size: 16px;
      }
    }

    &__heading {
      font-size: 72px;
      line-height: 75px;
      margin-bottom: 48px;
      font-weight: normal;

      @include media-breakpoint-down(sm) {
        font-size: 36px;
        margin-bottom: 32px;
      }
    }

    &__desc {
      font-weight: normal;
      font-size: 24px;
      line-height: 28px;

      @include media-breakpoint-down(sm) {
        font-size: 16px;
      }
    }
  }
</style>
