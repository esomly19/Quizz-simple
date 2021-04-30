import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Classement from './components/Classement.vue'
import Game from './components/Game.vue'
import App from './App.vue'
import StartQuizz from './components/StartQuizz.vue'
import CircularCountDownTimer from "vue-circular-count-down-timer";
Vue.use(CircularCountDownTimer);
Vue.use(BootstrapVue)

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",

  routes: [
    { path: "/", component: StartQuizz },
    { path: "/Game/", component: Game},
 { path: "/classement", component: Classement}
    
  ]
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})