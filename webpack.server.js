const path = require('path')

module.exports = {
    //Informujemy webpacka że bundle ma być budowany dla nodeJS a nie dla przeglądarki
    target: 'node',
    //Miejsce startowe 
    entry: './src/index.js',
    //Miejsce w którym ma zostać umieszczony już skopilowany plik
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        [
                            'env',
                            { targets: { browsers: ['last 2 versions'] } }
                        ]
                    ]
                }
            }
        ]
    }
}