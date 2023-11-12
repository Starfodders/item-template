const path = require('path');

module.exports = function override(config, env) {
    config.plugins = config.plugins.map(plugin => {
        if (plugin.constructor.name === 'HtmlWebpackPlugin') {
            return new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'index.html'),
            });
        }
        return plugin;
    });
    return config;
};