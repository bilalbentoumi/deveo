module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost:8000'
            }
        }
    },
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].title = 'Deveo';
            return args;
        })
    }
}