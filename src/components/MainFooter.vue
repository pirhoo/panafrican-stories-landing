<template>
  <div class="main-footer bg-dark text-light">
    <div class="main-footer__container container d-md-flex">
      <social-links class="flex-grow-1 main-footer__container__social-links" />
      <div class="main-footer__container__credits">
        © {{ year }} Panafrican Stories - Tous droits réservés.
      </div>
    </div>
  </div>
</template>

<script>
  import SocialLinks from './SocialLinks'

  export default {
    name: 'MainFooter',
    components: {
      SocialLinks
    },
    computed: {
      year () {
        return new Date().getFullYear()
      }
    }
  }
</script>

<style lang="scss">
  @import '../variables.scss';
  @import '../../node_modules/bootstrap/scss/_mixins';

  .main-footer {

    &__container {
      padding: 45px 0 34px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.24);

      @include media-breakpoint-down(sm) {
        border-bottom: none;
        text-align: center;
        padding: 0;
      }

      &__social-links {
        @include media-breakpoint-down(sm) {
          padding-bottom: 46px;
        }
      }

      &__credits {
        font-size: 12px;

        @include media-breakpoint-down(sm) {
          padding: 24px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.24);
        }
      }
    }
  }
</style>
