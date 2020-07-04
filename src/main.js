import Vue from 'vue'
import VuePlyr from 'vue-plyr'
import './main.scss'

import App from './components/App.vue'

Vue.use(VuePlyr, {
  plyr: {
    fullscreen: {
      enabled: false
    }
  },
  emit: ['ended']
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
