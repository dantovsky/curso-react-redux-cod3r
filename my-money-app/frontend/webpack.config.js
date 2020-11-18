// Config que vai ser interpretada pelo Webpack
const webpack = require('webpack') // Import no padrão Commons JS
const ExtractTextPlugin = require('extract-text-webpack-plugin') // Responsável por extrair os files CSS e aplicar o processo com Style Loader e CSS Loader

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules',
            jquery: 'modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
            bootstrap: 'modules/admin-lte/bootstrap/js/bootstrap.js'
        }
    },
    plugins: [
        new webpack.ProvidePlugin({ // Deixar o jQuery disponivel
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new ExtractTextPlugin('app.css') // Classe CSS que vai gerar
    ],
    module: {
        loaders: [{
            test: /.js[x]?$/, // Arquivos JavaScript
            loader: 'babel-loader',
            exclude: '/node_modules',
            query: {
                presets: ['es2015', 'react'], // Presets para passar pelos arquivos JS e JSX da app
                plugins: ['transform-object-rest-spread'] // Plugin que transforma os operadores spread da app, para fazer o transpile para a versão antiga do JS corretamente
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.woff|.woff2|.ttf|eot|.svg|.png|.jpg*.*$/,
            loader: 'file'
        }]
    }
}