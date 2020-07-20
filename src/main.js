import Vue from 'vue'
import App from './page/App.vue'
import ele from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import '@/base/base.css'
import QQQ from '../public/mine.js'
import Bridge from './config/bridge.js'
Vue.prototype.$bridge = Bridge
Vue.use(QQQ)
Vue.prototype.$mine = QQQ


Vue.use(ele)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
