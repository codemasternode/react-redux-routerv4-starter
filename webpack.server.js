const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const webpackNodeExternals = require('webpack-node-externals')

const config = {
    //Informujemy webpacka że bundle ma być budowany dla nodeJS a nie dla przeglądarki
    target: 'node',
    //Miejsce startowe 
    entry: './src/index.js',
    //Miejsce w którym ma zostać umieszczony już skopilowany plik
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [webpackNodeExternals()]

}
module.exports = merge(baseConfig, config)