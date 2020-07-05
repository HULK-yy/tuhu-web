module.exports = {
    configureWebpack: {
        devServer: {
            proxy: {
                "/*": {
                    target: "https://api.tuhu.cn",
                    changeOrigin: true
                }
            }
        }
    }
}