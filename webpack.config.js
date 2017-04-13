const path = require('path');

module.exports = {
    entry: {
        app: './frontend/src/js/app.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: './frontend/public_html/assets',
        publicPath: '/assets'
    },
    node: {
        net: 'empty'
    },
    devServer: {
        contentBase: './frontend/public_html'
    },
    resolve: {
            root: path.resolve(__dirname, 'frontend/src/js'),
            extensions: ['', '.webpack.js', '.web.js', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['jsx', 'babel?blacklist[]=strict']
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css', 'autoprefixer']
            },
            {
                test: /\.less$/,
                loaders: ['style', 'css', 'autoprefixer', 'less']
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url?limit=8192'
            }
        ]
    },
    devServer: {
        contentBase: './frontend/public_html',
        historyApiFallback: true,
        proxy: {
            '/api/*': {
                target: 'http://localhost:3000',
                secure: false
            }
        }
    },
    externals: {
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    }
};
