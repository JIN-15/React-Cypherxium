const CracoSourceMapLoader = require("craco-source-map-loader");

module.exports = {
    webpack: {
        plugins: [],
        configure: (webpackConfig) => {
            webpackConfig.module.rules.push({
                test: /\.js$/,
                enforce: "pre",
                use: ["source-map-loader"],
                exclude: /node_modules\/styled-components/,
            });
            return webpackConfig;
        },
    },
    plugins: [
        {
            plugin: CracoSourceMapLoader,
            options: {
                silent: true,
            },
        },
    ],
};
