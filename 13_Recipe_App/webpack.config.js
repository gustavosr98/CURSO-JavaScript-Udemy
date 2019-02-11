const path = require('path')

module.exports = {
    entry : {
        index: ['babel-polyfill', './src/index.js'],
        edit: ['babel-polyfill', './src/edit.js']
    },
    output: {
        path: path.resolve(__dirname , 'public/scripts'),
        filename:'[name]-bundle.js'
    },
    module : {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader:'babel-loader',
                options: {
                    presets: ['env'],
                    plugins: ['transform-object-rest-spread']
                }
            }
        },
        {
            test: /\.css$/,
            use: {
                loader: 'css-loader'
            }
        }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname , 'public'),
        publicPath: '/scripts/'
    },
    devtool: 'source-map'
}