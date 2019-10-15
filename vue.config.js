module.exports = {
    chainWebpack: (config) => {
        config.plugins.delete('prefetch');
        config.plugin('copy').tap((options) => {
            options[0][0].ignore.push('portfolio-images/**/*');
            return options;
        });
    },
    filenameHashing: false,
    productionSourceMap: false
}
// https://medium.com/@mrodal/how-to-make-lazy-loading-actually-work-in-vue-cli-3-7f3f88cfb102
// https://github.com/vuejs/vue-cli/issues/2231