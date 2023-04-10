//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'

//完整引入
//引入ElementUI组件库（引入所有组件，体量大，不推荐）
// import ElementUI from 'element-ui';
//引入ElementUI全部样式（（引入所有组件，体量大，不推荐））
// import 'element-ui/lib/theme-chalk/index.css';

//按需引入
import { Button,Row,DatePicker } from 'element-ui';

//关闭Vue的生产提示
Vue.config.productionTip = false

//应用ElementUI插件（引入所有组件，体量大，不推荐）
// Vue.use(ElementUI);
Vue.component('meta-button', Button);
Vue.component('meta-row', Row);
Vue.component('meta-date-picker', DatePicker);

//创建vm
new Vue({
  el:'#app',
  render: h => h(App),
})

