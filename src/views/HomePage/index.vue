<template>
  <div class="content">
    <div>
      <h1>我是通过amis配置json加载的...</h1>
      <a-button type="primary" @click="openAmisEditor">打开编辑器</a-button>
    </div>
    <amis ref="amisRef" :schema="schema" />
  </div>
</template>

<script setup>
import amis from "@/components/Amis/index.vue";
import { useRouter } from "vue-router";

let displayData = localStorage.getItem("schemaData");
const schema = displayData ? JSON.parse(displayData) : {};

const router = useRouter();
const openAmisEditor = () => {
  console.log("openAmisEditor...");
  router.push({ path: "/homeEditor" });
};
</script>
<style lang="less" scoped></style>
