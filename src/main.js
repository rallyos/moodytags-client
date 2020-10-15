import Vue from 'vue'
import Home from './components/Home.vue'
import Tags from './components/Tags.vue'
import Playlists from './components/Playlists.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

const routes = {
  '/': Home,
  '/tags': Tags,
  '/playlists': Playlists
}

Vue.use(vuetify);

const app = new Vue({
  el: '#app',

  data: {
    currentRoute: window.location.pathname
  },

  computed: {
    ViewComponent () {
      return routes[this.currentRoute]// || NotFound
    }
  },

  vuetify,
  render (h) { return h(this.ViewComponent) }
}).$mount('#app')

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
