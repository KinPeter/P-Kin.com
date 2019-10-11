module.exports = {
    chainWebpack: (config) => {
        config.plugins.delete('prefetch');
    }
}
// https://medium.com/@mrodal/how-to-make-lazy-loading-actually-work-in-vue-cli-3-7f3f88cfb102
