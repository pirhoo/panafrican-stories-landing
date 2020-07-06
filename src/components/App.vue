<template>
  <div id="app" class="app">
    <main-header class="app__main-header d-flex d-md-none" />
    <div class="position-relative overflow-hidden">
      <main-video class="app__main-video" />
      <div class="container app__container">
        <main-header class="app__container__main-header d-none d-md-flex" />
        <lead-jumbotron class="app__container__lead-jumbotron" />
        <newsletter-form class="app__container__newsletter-form" />
      </div>
    </div>
    <main-footer class="app__main-footer" />
  </div>
</template>

<script>
  import MainFooter from './MainFooter'
  import MainHeader from './MainHeader'
  import MainVideo from './MainVideo'
  import LeadJumbotron from './LeadJumbotron'
  import NewsletterForm from './NewsletterForm'

  export default {
    name: 'App',
    components: {
      MainFooter,
      MainHeader,
      MainVideo,
      LeadJumbotron,
      NewsletterForm
    }
  }
</script>

<style lang="scss">
  @import '../variables.scss';
  @import '../../node_modules/bootstrap/scss/_mixins';

  .app {
    overflow: hidden;
    max-width: 100%;
    min-height: 100vh;

    &__main-video {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 0;

      @include media-breakpoint-down(sm) {
        margin-bottom: 30px;
        position: relative;
      }
    }

    &__container {
      position: relative;
      z-index: 100;
      padding: 0 72px 0;

      @include media-breakpoint-down(sm) {
        position: static;
        padding: 0 24px;
      }

      &__main-header {
        padding-top: 45px;
        margin-bottom: 100px;
      }

      &__lead-jumbotron {
        margin-bottom: 52px;
      }

      &__newsletter-form {
        margin-bottom: 91px;

        @include media-breakpoint-down(sm) {
          margin-bottom: 44px;
        }
      }
    }

    &__main-footer {
      position: relative;
      z-index: 100;
      background: inherit;
      margin-bottom: 44px;

      @include media-breakpoint-down(sm) {
        padding: 0 24px;
        margin-bottom: 59px;
      }
    }
  }
</style>
