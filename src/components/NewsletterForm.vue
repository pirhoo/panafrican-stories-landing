<template>
  <form class="newsletter-form">
    <label class="newsletter-form__label" :for="uniqueId">
      Soyez les premiers informés
    </label>
    <div class="d-block d-md-flex">
      <input class="newsletter-form__input form-control form-control-lg" type="text" :id="uniqueId" placeholder="Recevoir la newsletter" />
      <button type="submit" class="btn btn-primary btn-lg text-nowrap text-white newsletter-form__submit">
        Envoyer
      </button>
    </div>
  </form>
</template>

<script>
  import { uniqueId } from 'lodash'

  export default {
    name: 'NewsletterForm',
    computed: {
      uniqueId () {
        return uniqueId('newsletter-form__input--')
      }
    }
  }
</script>

<style lang="scss">
  @import '../variables.scss';
  @import '../../node_modules/bootstrap/scss/_mixins';

  .newsletter-form {
    max-width: 263px;

    @include media-breakpoint-down(sm) {
      max-width: 100%;
    }

    &__input {
      margin-right: 16px;

      @include media-breakpoint-down(sm) {
        margin-right: 0;
        margin-bottom: 16px;
      }
    }

    &__label {
      font-size: 21px;
      font-weight: bold;
      margin-bottom: 16px;
    }

    &__submit {
      @include media-breakpoint-down(sm) {
        display: block;
        width: 100%;
      }
    }
  }
</style>
