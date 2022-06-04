const path = require('path')

const myEntrys = ['login.js','student.js','teacher.js'];
const myFileNames = ['login_build.js', 'student_build.js', 'teacher_build.js'];

const myEntry = myEntrys[2];
const myFileName = myFileNames[2];

module.exports = {
    entry: `./src/${myEntry}`,
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
        filename: myFileName,
        path: path.resolve(__dirname, 'build', 'dev')
    }
}