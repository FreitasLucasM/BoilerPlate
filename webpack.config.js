const { dirname } = require("path")
const path = require("path")

module.exports = {
    mode: 'development',
    entry: {
        index:'./src/index.js'
    },

    output:{
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            }
        ]
    },
    devServer:{
        static: path.join(__dirname, "dist"),
        liveReload:true
    }
}