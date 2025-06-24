import Vue from 'vue'
import Dev from './Dev.vue'
import { Select, Option } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.component(Option.name, Option)
Vue.component(Select.name, Select)

new Vue({
  render: (h) => h(Dev),
}).$mount('#app')
