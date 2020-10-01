const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    output: {
        filename: 'principals.js',
        path: __dirname + '/public'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css" // nome do arquivo gerado
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader, // extrair o CSS para um arquivo específico (ele é conflitante com o 'style-loader')
                // 'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                'css-loader' // interpreta @import, url()...
            ]
        }]
    }
}