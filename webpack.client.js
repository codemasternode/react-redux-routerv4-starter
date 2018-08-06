const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const config = {
    //Informujemy webpacka że bundle ma być budowany dla nodeJS a nie dla przeglądarki
    //Miejsce startowe 
    entry: './src/client/client.js',
    //Miejsce w którym ma zostać umieszczony już skopilowany plik
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
}

module.exports = merge(baseConfig, config)