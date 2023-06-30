const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        // 提前打包一些基本不怎么修改的文件
        vendor: [ 'vue', 'vue-router', 'vuex', 'vue-i18n', 'axios'],
        third: ['@ant-design/icons-vue', 'blueimp-md5']
    },
    output: {
        path: path.join(__dirname, './public/static/dll'),
        filename: '[name].dll.js', //打包后文件的名字
        library: 'main_[name]_library' //可选 暴露出的全局变量名 必须和webpack.DllPlugin中的`name: '[name]_library',`保持一致
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, './public/static/dll', '[name]-manifest.json'), //生成清单文件
            name: 'main_[name]_library',
            context: __dirname
        })
    ]
};
