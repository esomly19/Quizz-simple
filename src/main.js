import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Fin from './components/Fin.vue'
import Game from './components/Game.vue'
import Classement from './components/Classement.vue'
import App from './App.vue'
import StartQuizz from './components/StartQuizz.vue'
import CircularCountDownTimer from "vue-circular-count-down-timer";
import VueLocalStorage from 'vue-localstorage'
Vue.use(CircularCountDownTimer);
Vue.use(BootstrapVue)

Vue.use(VueRouter)


Vue.use(VueLocalStorage)

const router = new VueRouter({
  mode: "history",

  routes: [
    { path: "/", component: StartQuizz },
        { path: "/Classement/", component: Classement},
    { path: "/Game/", component: Game},
 { path: "/Fin", component: Fin}
    
  ]
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})