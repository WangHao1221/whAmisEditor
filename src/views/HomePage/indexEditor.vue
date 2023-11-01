<template>
  <div>
    <a-button type="primary" @click="goBack">返回</a-button>
    <a-button type="primary" @click="toSave">保存</a-button>
    <a-button type="primary" @click="isPreview = !isPreview">{{
      isPreview ? "编辑" : "预览"
    }}</a-button>
    <amisEditor
      theme="cxd"
      className="is-fixed"
      v-if="schema && amisEnv"
      :isMobile="isMobile"
      :preview="isPreview"
      :value="schema"
      :amisEnv="amisEnv"
      :onChange="setSchema"
    />
  </div>
</template>

<script setup>
import { Editor } from "amis-editor"; //错误处：只要引用amis-editor，浏览器控制台就会异常（）
import { applyPureReactInVue } from "veaury";
import { ref } from "vue";
import { useRouter } from "vue-router";
const amisEditor = applyPureReactInVue(Editor);

import "./amisEditorCoreStyle.css";
import "amis/lib/themes/default.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/css/v4-shims.css";
import "amis/sdk/helper.css";
import "amis/sdk/iconfont.css";

//dom ref
document.documentElement.style.fontSize = "14px";
const isPreview = ref(false),
  isMobile = ref(false),
  schema = ref(null),
  amisEnv = ref(null);
function setSchema(e) {
  schema.value = e || {};
  console.log(schema.value);
  // localStorage.setItem('formEditorData', JSON.stringify(schema.value))
}

function setAmisEnv() {
  amisEnv.value = {
    theme: "cxd", //antd
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
  };
}

setAmisEnv();
let displayData = localStorage.getItem("schemaData");
const amisSchema = displayData ? JSON.parse(displayData) : {};
setSchema(amisSchema);

const router = useRouter();
const goBack = () => {
  router.go(-1);
};
const toSave = () => {
  console.log("toSave...", schema.value);
  localStorage.setItem("schemaData", JSON.stringify(schema.value));
};
</script>

<style lang="less" scoped>
:deep(.is-fixed) {
  top: 58px;
}
// :deep(.ae-Preview-body) {
// 	box-sizing:border-box !important;
// }
// :deep(.ae-Settings-content.hoverShowScrollBar) {
// 	box-sizing:border-box !important;
// }
// :deep(.preview) {
// 	.ae-Editor-hlbox{
// 		display: none !important;
// 	}
// }
</style>
