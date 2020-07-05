<template>
  <div class="main-video" :class="{ 'main-video--play': state === 'play', 'main-video--pause': state === 'pause' }">
    <vue-plyr :options="options" ref="plyr" class="main-video__plyr">
      <video autoplay loop src="https://s3.eu-west-3.amazonaws.com/media.panafricanstories.com/videos/00.mp4" poster="../assets/poster.png">
        <source src="https://s3.eu-west-3.amazonaws.com/media.panafricanstories.com/videos/00.mp4" type="wideo/mp4" />
      </video>
    </vue-plyr>
    <button class="btn btn-light main-video__controls" @click="toggleState">
      {{ state }}
    </button>
  </div>
</template>

<script>
  export default {
    name: 'MainVideo',
    data () {
      return {
        state: 'pause',
        mounted: false
      }
    },
    computed: {
      player () {
        return this.$refs.plyr.player
      },
      options () {
        return {
          controls: false,
          clickToPlay: false,
          autoplay: true
        }
      }
    },
    methods: {
      toggleState (toggle) {
        return this.player.togglePlay(toggle)
      }
    },
    mounted () {
      this.player.on('play', () => this.state = 'play')
      this.player.on('pause', () => this.state = 'pause')
    }
  }
</script>

<style lang="scss">
  @import '../variables.scss';
  @import '../../node_modules/bootstrap/scss/_mixins';

  .main-video {
    position: relative;

    &__plyr {
      position: absolute;
      z-index: 100;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      overflow: hidden;

      @include media-breakpoint-down(sm) {
        position: static;
        display: block;
      }

      .plyr {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: stretch;

        &__video-wrapper {
          flex-grow: 1;

          video, .plyr__poster {
            position: absolute;
            top: 0;
            left: 0;

            @include media-breakpoint-down(sm) {
              position: static;
            }

            @media (min-aspect-ratio: 16/9) {
              width: 100%;
              height: auto;
            }

            @media (max-aspect-ratio: 16/9) {
              width: auto;
              height: 100%;
            }

            @include media-breakpoint-down(sm) {
              position: static;
              width: 100%;
              height: auto;
            }
          }
        }
      }
    }

    &:before {
      content: "";
      @include gradient-directional(#000, rgba(#000, 0), 90deg);
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: 200;

      @include media-breakpoint-down(sm) {
        display: none;
      }
    }

    &__controls,
    &__controls:hover,
    &__controls:focus,
    &__controls:active {
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%);
      overflow: hidden;
      text-indent: -9999px;
      height: 54px;
      width: 54px;
      border-radius: 50%;
      z-index: 300;
      background: url('../assets/play.svg') center center transparent;
      transition: 400ms;
    }

    & &__controls,
    &--play &__controls {
      top: 45px + 95px / 2;
      right: 5%;
      transform: translate(0%, -50%);

      @include media-breakpoint-down(sm) {
        top: 5%;
        right: 5%;
        transform: translate(0%, 0%) scale(0.7);
      }
    }

    &--play &__controls {
      background-image: url('../assets/pause.svg');
    }

    &--pause &__controls {
      @include media-breakpoint-down(sm) {
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%);
      }
    }
  }
</style>
