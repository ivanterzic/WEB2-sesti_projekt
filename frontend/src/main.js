import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import App from './App.vue'
import TimedGame from './components/TimedGame.vue'
import UntimedGame from './components/UntimedGame.vue'
import HomePage from './components/HomePage.vue'
import NotFoundPage from './components/NotFoundPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/timed', component: TimedGame },
  { path: '/untimed', component: UntimedGame },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const pinia = createPinia()
createApp(App).use(router).use(pinia).mount('#app')