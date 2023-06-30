const commonProxy = 'http://192.168.1.1:8888/';
module.exports= {
    defaultTheme: 'light',   //默认风格 light蓝白 dark暗黑
    prodPublicPath: '',
    proxy: {
        '/csf': {
            target: commonProxy,
            headers: {
                Referer: commonProxy, 
            },
            secure: false,
            changeOrigin: true,
            pathRewrite:{
                '^/csf':'/gateway/csf'
            }
         }
    }
}