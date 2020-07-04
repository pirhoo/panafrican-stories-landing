<template>
  <form class="newsletter-form" @submit.prevent="subscribe($event)" :class="{ 'newsletter-form--success': !!successMessage, 'newsletter-form--error': !!errorMessage }">
    <label class="newsletter-form__label" :for="uniqueId">
      Soyez les premiers informés
    </label>
    <fieldset :disabled="frozen" :data-success-message="successMessage" :data-error-message="errorMessage">
      <div class="d-block d-md-flex">
        <input class="newsletter-form__input form-control form-control-lg" v-model="email" name="EMAIL" :id="uniqueId" placeholder="Recevoir la newsletter" />
        <button type="submit" class="btn btn-primary btn-lg text-nowrap text-white newsletter-form__submit">
          Envoyer
        </button>
      </div>
    </fieldset>
  </form>
</template>

<script>
  import Promise from 'promise-polyfill'
  import jsonp from 'jsonp'
  import { last, uniqueId } from 'lodash'

  export default {
    name: 'NewsletterForm',
    props: {
      action: {
        type: String,
        default: 'https://pirhoo.com'
      }
    },
    data () {
      return {
        email: '',
        frozen: false,
        response: {},
        errorMessage: null,
        successMessage: null
      };
    },
    computed: {
      url () {
        return this.action.replace('/post?', '/post-json?').concat('&c=?')
      },
      submitUrl () {
        const url = new URL(this.url)
        url.searchParams.set('EMAIL', this.email)
        url.searchParams.set('group[9][1]', '1')
        return url.href
      },
      uniqueId () {
        return uniqueId('newsletter-form__input--')
      }
    },
    methods: {
      subscribe () {
        this.resetMessages()
        this.freeze()
        // Send the data, catch the result no matter what and unfreeze the form
        return this.send().then(this.done, this.done)
      },
      send () {
        return new Promise((resolve, reject) => {
          jsonp(this.submitUrl, { param: 'c' }, (err, data) => {
            return err ? reject(err) : resolve(data)
          })
        })
      },
      done ({ result, msg }) {
        if (result === 'success') {
          this.email = ''
          this.successMessage = msg || "Merci !"
        } else {
          // Mailchimp formats errors in list
          this.errorMessage = last((msg || "Une erreur s'est produite").split('0 -'))
        }
        setTimeout(this.unfreeze, 3000)
      },
      resetMessages () {
        this.errorMessage = null
        this.successMessage = null
      },
      freeze () {
        this.frozen = true
      },
      unfreeze () {
        this.frozen = false
        this.resetMessages()
      }
    }
  }
</script>

<style lang="scss">
  @import '../variables.scss';
  @import '../../node_modules/bootstrap/scss/_mixins';

  .newsletter-form {
    max-width: 263px + 8px + 132px;

    @include media-breakpoint-down(sm) {
      max-width: 100%;
      text-align: center;
    }

    fieldset {
      position: relative;
      z-index: 0;

      &:after {
        content: '';
        overflow: hidden;
        padding: 0.5rem;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 100;
        position: absolute;
        top: -5px;
        bottom: -5px;
        left: -5px;
        right: -5px;
        border-radius: $border-radius-lg;
        font-weight: bolder;
        pointer-events: none;
        transition: 400ms;
      }
    }

    &--error fieldset,
    &--success fieldset {

      &:after {
        opacity: 1;
        pointer-events: all;
      }
    }

    &--error fieldset:after {
      content: attr(data-error-message);
      background: rgba($danger, 0.9);
    }

    &--success fieldset:after {
      content: attr(data-success-message);
      background: rgba($primary, 0.9);
    }

    &__input {
      margin-right: 16px;
      border-radius: 4px;

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
