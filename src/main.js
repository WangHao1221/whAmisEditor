import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import i18n from './i18n';
import VueForm from '@lljj/vue3-form-ant';
// import 'echarts'
import * as echarts from 'echarts'
import ECharts from 'vue-echarts'

// 自定义全局组件
import "dayjs/locale/zh-cn";

// antdv按需加载
import lazyAntd from '@/lazyAntd';
import './index.less';
// 全局常量
import JsonViewer from "vue-json-viewer"

//创建实例
let instance = createApp(App);

instance.config.globalProperties.$echarts = echarts;
// 给app实例上挂router，store，国际化
instance.use(router);
instance.use(i18n);
instance.use(VueForm);
instance.use(JsonViewer); // jsonview展示

// 按需加载antdv组件
lazyAntd(instance);

// 挂载自定义组件
instance.component('VueEchart', ECharts)

instance.mount('#app')
