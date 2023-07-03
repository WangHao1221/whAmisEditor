<template>
  <div>
    <a-button type="primary" @click="goBack">返回</a-button>
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
  amisEnv.value = {};
}

function saveData() {
  console.log("saveData.....");
}

setAmisEnv();
setSchema({
  type: "page",
  title: "home",
  body: [
    {
      type: "chart",
      config: {
        tooltip: {
          trigger: "axis",
          showDelay: 0,
          hideDelay: 100,
          transitionDuration: 0.4,
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          id: "u:65553aec98e8",
        },
        yAxis: {
          type: "value",
          id: "u:f8c06de84046",
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            id: "u:1b060b63b09a",
          },
        ],
        title: {
          text: "未来一周气温变化",
          subtext: "纯属虚构",
          itemGap: 10,
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
        },
      },
      replaceChartOption: true,
      id: "u:b847da1db472",
    },
    {
      type: "chart",
      config: {
        type: "page",
        body: {
          type: "chart",
          config: {
            legend: {
              formatter: "function (name) { return 'Legend ' + name;}",
            },
            dataset: {
              source: [
                ["type", "2012", "2013", "2014", "2015", "2016"],
                ["Forest", 320, 332, 301, 334, 390],
                ["Steppe", 220, 182, 191, 234, 290],
                ["Desert", 150, 232, 201, 154, 190],
                ["Wetland", 98, 77, 101, 99, 40],
              ],
            },
            xAxis: {
              type: "category",
              axisTick: {
                show: false,
              },
            },
            yAxis: {},
            series: [
              {
                type: "bar",
                seriesLayoutBy: "row",
              },
              {
                type: "bar",
                seriesLayoutBy: "row",
              },
              {
                type: "bar",
                seriesLayoutBy: "row",
              },
              {
                type: "bar",
                seriesLayoutBy: "row",
              },
            ],
          },
        },
      },
      replaceChartOption: true,
      id: "u:57a6e6092e9e",
    },
  ],
  id: "u:0fc1f3e02d00",
  asideResizor: false,
  style: {
    boxShadow: " 0px 0px 0px 0px transparent",
  },
  pullRefresh: {
    disabled: true,
  },
  toolbar: [],
  aside: [],
});

const router = useRouter();
const goBack = () => {
  router.go(-1);
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
