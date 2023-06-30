<template>
 <div ref="amisBox" class="box" />
</template>

<script setup>
import 'amis/sdk/sdk.js';
import 'amis/lib/themes/default.css';
import "amis/lib/themes/antd.css";
import "amis/lib/themes/cxd.css";
import 'amis/sdk/iconfont.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/css/v4-shims.css';

import { render as renderSchema } from 'amis'
import { createRoot } from 'react-dom/client';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const propsData = defineProps({
  schema: {
    type: Object,
    required: true
  }	
})
const amisScoped=ref(null)//amis实例
const amisBox=ref(null)//dom ref

function initEnv() {
      window.enableAMISDebug = false
      return {
        theme: 'cxd',//antd
        enableAMISDebug: false,
		// fetcher: ({
		// 	url, // 接口地址
		// 	method, // 请求方法 get、post、put、delete
		// 	data, // 请求数据
		// 	responseType,
		// 	config, // 其他配置
		// 	headers // 请求头
		// }) => {
		// 	console.log('fetcher', method)
		// 	config = config || {};
		// 	config.withCredentials = true;
		// 	responseType && (config.responseType = responseType);

		// 	if (config.cancelExecutor) {
		// 	config.cancelToken = new (axios).CancelToken(
		// 		config.cancelExecutor
		// 	);
		// 	}

		// 	config.headers = headers || {};

		// 	if (method !== 'post' && method !== 'put' && method !== 'patch') {
		// 	if (data) {
		// 		config.params = data;
		// 	}
		// 	return (axios)[method](url, config);
		// 	} else if (data && data instanceof FormData) {
		// 	config.headers = config.headers || {};
		// 	config.headers['Content-Type'] = 'multipart/form-data';
		// 	} else if (
		// 	data &&
		// 	typeof data !== 'string' &&
		// 	!(data instanceof Blob) &&
		// 	!(data instanceof ArrayBuffer)
		// 	) {
		// 	data = JSON.stringify(data);
		// 	config.headers = config.headers || {};
		// 	config.headers['Content-Type'] = 'application/json';
		// 	}

		// 	return (axios)[method](url, data, config);
		// },
		// isCancel: (value) => {
		// 	console.log('isCancel')
		// },
		// copy: (content) => {
		// 	console.log('copy')
		// }
      }
}
//获取amis数据
function getValues(name){
	let promise = new Promise((resolve,reject) => {
	try{
		resolve(amisScoped.value.getComponentByName(name).getValues())
	}catch(e){
		resolve(null)
	}
	})
	return promise
}

function handleAction(e, action) {
	// console.log(e,action)
}

onMounted(() => {
	const schema=JSON.parse(JSON.stringify(propsData.schema))
	if(!schema.cssVars){
		schema.cssVars={}
	}
	schema.cssVars["--Table-fontSize"]='14px'
	// schema.cssVars["--TableCell-paddingY"]='10px'
	schema.cssVars["--Table-searchableForm-backgroundColor"]='#fff'
	schema.cssVars["--Tree-max-height"]="2000px"
	schema.cssVars["--Page-aside-width"]="240px"
	// schema.cssVars["--inputFile-list-marginTop"]="4px"
	
	createRoot(amisBox.value).render(
		renderSchema(
			schema,
			{
				onAction:(e, action) => {handleAction(e, action)},
				scopeRef: (ref) => (amisScoped.value = ref)
			},
			initEnv()
		)
	)
})

defineExpose({
	getValues
});

</script>
<style lang="less" scoped>
</style>
