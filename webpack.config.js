const path = require('path')

module.exports = {
    entry: './src/login.js',
    devtool: 'inline-source-map',
    target: 'electron-renderer',
    module: {
        rules:[
            { 
                test:/\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [[
                            '@babel/preset-env',{
                                targets: {
                                    esmodules: true
                                }
                            }
                        ], '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'sass-loader']
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less/,
                use:[
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|svg)$/,
                exclude: /node_modules/,
                use: ['file-loader']
            }
        ]
    },
    resolve: { extensions: ['.tsx', '.ts', '.js', '.jsx', '.css','.sass','.less'] },
    output: {
        filename: 'login_build.js',
        path: path.resolve(__dirname, 'build', 'dev')
    }
}