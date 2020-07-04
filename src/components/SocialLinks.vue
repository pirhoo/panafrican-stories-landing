<template>
  <div class="social-links d-md-flex align-items-center">
    <div class="social-links__label">
      Restez connectés
    </div>
    <ul class="list-inline social-links__items ml-4">
      <li class="social-links__items__network list-inline-item mr-4">
        <a href="https://www.instagram.com/panafricanstories/" target="_blank" title="Instagram" class="social-links__items__network__link">
          <img src="../assets/instagram.svg" class="social-links__items__network__icon" alt="" />
          <span class="sr-only">Instagram</span>
        </a>
      </li>
      <li class="social-links__items__network list-inline-item mr-4">
        <a href="https://www.facebook.com/panafricanstories/" target="_blank" title="Facebook" class="social-links__items__network__link">
          <img src="../assets/facebook.svg" class="social-links__items__network__icon" alt="" />
          <span class="sr-only">Facebook</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'SocialLinks'
  }
</script>

<style lang="scss">
  @import '../variables.scss';
  @import '../../node_modules/bootstrap/scss/_mixins';

  .social-links {

    &__label {
      font-weight: bold;

      @include media-breakpoint-down(sm) {
        padding-bottom: 26px;
      }
    }

    &__items {
      margin: 0;

      &__network {

        &__icon {
          height: 26px;
          width: 26px;
        }
      }
    }
  }
</style>
