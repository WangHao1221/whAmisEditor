
require('events').EventEmitter.defaultMaxListeners = 0; // 解除限制
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const WebpackBar = require('webpackbar');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const projectConfig= require('./config/index');
const {name}= require('./package.json');

const dllFiles = fs.readdirSync(path.resolve(__dirname, './public/static/dll'));
const publicPath = process.env.NODE_ENV === 'production' ?  `${projectConfig.prodPublicPath}/` : '/';

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports= {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    filenameHashing: true, // 文件名加hash值
    productionSourceMap: false, // 生产环境的sourcemap
    parallel: false, // 生产环境关闭并行打包
    devServer: {
        hot: true, // 热重载
        disableHostCheck: true, //
        port: 8888, // 端口
        open: true, // 打开
        noInfo: true, // log信息
        quiet: true, // log信息
        overlay: {
            warnings: false,
            errors: true
        },
        clientLogLevel: 'error',
        proxy: projectConfig.proxy
    },
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'src/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: name,
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunks
            chunks: ['chunk-libs', 'chunk-antdUI', 'chunk-commons', 'runtime', 'index'],
            // 自定义属性
            defaultTheme: projectConfig.defaultTheme === 'dark' ? 'antd.dark.less' : 'antd.variable.less',
            // 模板内静态资源需要加上publicpath
            prodPublicPath: process.env.NODE_ENV === 'production' ? `${projectConfig.prodPublicPath}/` : '/'
        }
    },
    css: {
        loaderOptions: {
            less: {
                // lessOptions: {
                    modifyVars: {
                      'font-size-base': '12px'
                    },
                    javascriptEnabled: true,
                //   },
            }
        }
    },
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.jsx', 'json'],
            alias: {
                '@': resolve('src'),
                utils: resolve('src/assets/js/utils/index.js'),
                'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
            }
        },
        // loader的本地modules
        resolveLoader: {
            modules: [path.join(__dirname, 'build', 'loaders'), 'node_modules'] // 所有的loader默认查找的目录，需要加上node_modules目录
        },
        plugins: [
            // copyiview部分
            new CopyWebpackPlugin([
            ]),
            ...(process.env.NODE_ENV === 'production'? dllFiles.map(file => /.*\-manifest.js/.test(file)
                ? new webpack.DllReferencePlugin({
                    manifest: path.join(__dirname, `./public/static/dll/${file}`),
                })
                : new AddAssetHtmlPlugin([
                    {
                        filepath: path.resolve(__dirname, `./public/static/dll/${file}`),
                        publicPath: publicPath + 'static/dll',
                        outputPath: '/static/dll'
                    }
                ])
            ): []),
            ...(process.env.NODE_ENV === 'production'? []: [
                new HardSourceWebpackPlugin({
                    info: {
                        // 'none' or 'test'.
                        mode: 'none',
                        // 'debug', 'log', 'info', 'warn', or 'error'.
                        level: 'error'
                    },
                    // 缓存清理
                    cachePrune: {
                        maxAge: 2 * 24 * 60 * 60 * 1000, // 单位毫秒
                        sizeThreshold: 50 * 1024 * 1024 // 缓存大小阈值
                    }
                })
            ]),
            new WebpackBar({
                name,
                [process.env.NODE_ENV === 'production'? 'color': undefined]: '#2f54eb'
            })
        ],
        optimization: {
            // 提取manifest
            runtimeChunk: 'single',
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    //基础类库
                    libs: {
                        name: 'chunk-libs',
                        chunks: 'initial',
                        priority: 10,
                        test: /[\\/]node_modules[\\/]/
                    },
                    //UI组件库
                    antdUI: {
                        name: 'chunk-antdUI',
                        priority: 20,
                        test: /[\\/]node_modules[\\/]_?web(.*)/
                    },
                    //自定义组件/函数
                    commons: {
                        name: 'chunk-commons',
                        test: resolve('src/components'),
                        minChunks: 3,
                        priority: 5,
                        reuseExistingChunk: true
                    }
                }
            }
        }
    },
    chainWebpack: (config) => {
        const svgRule = config.module.rule('svg');

        svgRule.uses.clear();

        svgRule
            .use('vue-loader')
            .loader('vue-loader-v16') // or `vue-loader-v16` if you are using a preview support of Vue 3 in Vue CLI
            .end()
            .use('vue-svg-loader')
            .loader('vue-svg-loader');

        config.resolve.symlinks(true);
    }
}
