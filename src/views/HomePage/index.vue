<template>
	<div class="content">
		<div>
            <h1>我是通过amis配置json加载的... </h1>
            <a-button  type="primary" @click="openAmisEditor">打开编辑器</a-button>
        </div>
		<amis ref="amisRef" :schema="schema" />
	</div>
</template>

<script setup>
import amis from '@/components/Amis/index.vue'
import {useRouter} from 'vue-router';

const schema = {
  "type": "page",
  "title": "home",
  "body": [
    {
      "type": "chart",
      "config": {
        "tooltip": {
          "trigger": "axis",
          "showDelay": 0,
          "hideDelay": 100,
          "transitionDuration": 0.4
        },
        "xAxis": {
          "type": "category",
          "data": [
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun"
          ],
          "id": "u:65553aec98e8"
        },
        "yAxis": {
          "type": "value",
          "id": "u:f8c06de84046"
        },
        "series": [
          {
            "data": [
              820,
              932,
              901,
              934,
              1290,
              1330,
              1320
            ],
            "type": "line",
            "id": "u:1b060b63b09a"
          }
        ],
        "title": {
          "text": "未来一周气温变化",
          "subtext": "纯属虚构",
          "itemGap": 10,
          "shadowBlur": 0,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0
        }
      },
      "replaceChartOption": true,
      "id": "u:b847da1db472"
    },
    {
      "type": "chart",
      "config": {
        "type": "page",
        "body": {
          "type": "chart",
          "config": {
            "legend": {
              "formatter": "function (name) { return 'Legend ' + name;}"
            },
            "dataset": {
              "source": [
                [
                  "type",
                  "2012",
                  "2013",
                  "2014",
                  "2015",
                  "2016"
                ],
                [
                  "Forest",
                  320,
                  332,
                  301,
                  334,
                  390
                ],
                [
                  "Steppe",
                  220,
                  182,
                  191,
                  234,
                  290
                ],
                [
                  "Desert",
                  150,
                  232,
                  201,
                  154,
                  190
                ],
                [
                  "Wetland",
                  98,
                  77,
                  101,
                  99,
                  40
                ]
              ]
            },
            "xAxis": {
              "type": "category",
              "axisTick": {
                "show": false
              }
            },
            "yAxis": {
            },
            "series": [
              {
                "type": "bar",
                "seriesLayoutBy": "row"
              },
              {
                "type": "bar",
                "seriesLayoutBy": "row"
              },
              {
                "type": "bar",
                "seriesLayoutBy": "row"
              },
              {
                "type": "bar",
                "seriesLayoutBy": "row"
              }
            ]
          }
        }
      },
      "replaceChartOption": true,
      "id": "u:57a6e6092e9e"
    }
  ],
  "id": "u:0fc1f3e02d00",
  "asideResizor": false,
  "style": {
    "boxShadow": " 0px 0px 0px 0px transparent"
  },
  "pullRefresh": {
    "disabled": true
  },
  "toolbar": [
  ],
  "aside": [
  ]
}

const router = useRouter();
const openAmisEditor = () => {
  console.log('openAmisEditor...')
  router.push({path: '/homeEditor'});
}
</script>
<style lang="less" scoped>
</style>