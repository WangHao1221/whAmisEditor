<template>
    <div id="main-app">
        <router-view >
        </router-view>
        </div>
</template>
<script>
import {defineComponent, ref, computed, watch} from 'vue';
import enUS from 'ant-design-vue/es/locale/en_US';
import zhCN from 'ant-design-vue/es/locale/zh_CN';

export default defineComponent({
    name: 'App',
    components: {
    },
    setup() {
        const locale = ref(zhCN.locale);

        return {
            locale,
            enUS,
            zhCN
        }
    }
});
</script>
<style lang="less" scoped>
#main-app {
    overflow-x: auto;
    height: 100%;
    .app-layout {
        min-width: 1280px;
    }
}
</style>
