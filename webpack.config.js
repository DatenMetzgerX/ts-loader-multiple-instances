var path = require("path");

module.exports = {
    entry: "./src/common/simple.ts",
    debug: true,
    devtool: "inline-source-map",
    output: {
        path: __dirname + "/dist",
        filename: "parallel-es.js"
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [
            {
                include: [path.resolve(__dirname, "./src/browser")],
                loader: 'ts-loader',
                query: {
                    instance: "browser",
                    configFileName: "./src/browser/tsconfig.json"
                }
            },
            {
                include: [path.resolve(__dirname, "./src/common")],
                loader: 'ts-loader',
                query: {
                    instance: "common",
                    configFileName: "./src/common/tsconfig.json"
                }
            }
        ]
    },
    plugins: []
};
