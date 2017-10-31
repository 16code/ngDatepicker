var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var srcPath = path.join(__dirname, './src');
var distPath = path.join(__dirname, './dist');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var cssLoaderConfig = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
        'css-loader',
        {
            loader: 'postcss-loader',
            options: {
                plugins: () => [autoprefixer({
                    browsers: ['last 3 version', 'ie >= 10']
                })]
            }
        },
        'less-loader'
    ]
});

function webpackConfig(env) {
    var isProduct = env.prod;
    var isSrc = env.source;
    var plugins = [
        // new HtmlWebpackPlugin({
        //     template: './src/index.html',
        //     // chunks: ['app', 'vendor', 'runtime'],
        //     filename: 'index.html',
        //     title: 'Merchant Web'
        // }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            noParse: /node_modules/,
            options: {
                postcss: () => [autoprefixer({
                    browsers: [
                        'last 3 version',
                        'ie >= 10',
                    ],
                })]
            }
        }),
        new ExtractTextPlugin({
            filename: isProduct ? 'datepicker.min.css' : 'datepicker.css'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isProduct ? JSON.stringify('production') : JSON.stringify('production')
            }
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/)
    ];
    let ugifyOption = {};
    if (isSrc) {
        ugifyOption = {
            sourceMap: false,
            comments: false,
            beautify: true,
            compress: {
                warnings: false,
                drop_console: true
            },
            output: {
                beautify: true,
                wrap_iife: true
            }
        }
    }
    // 用户生产环境
    if (isProduct) {
        ugifyOption = {
            sourceMap: false,
            comments: false,
            compress: {
                warnings: false,
                keep_fnames: true,
                drop_console: true
            },
            mangle: {
                keep_fnames: true
            }
        };
    }
    var productionPlugins = [
        // new CleanWebpackPlugin([distPath]),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin(ugifyOption)
    ]
    if (isSrc || isProduct) {
        plugins.push(...productionPlugins);
    }
        
    return {
        cache: true,
        devtool: isProduct && isSrc ? false : 'source-map',
        devtool: false,
        entry: ['./src/datepicker/index.js', './src/styles/datepicker.less'],
        output: {
            publicPath: '/',
            libraryTarget: 'umd',
            library: 'ngDatePicker',
            filename: isProduct ? 'datepicker.min.js' : 'datepicker.js',
            path: distPath
        },
        module: {
            loaders: [{
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }]
        },
        resolve: {
            modules: [path.resolve('src'), 'node_modules'],
            alias: {
                angular: nodeModulesPath('/angular/angular.min.js'),
                moment: nodeModulesPath('/moment/min/moment.min.js')
            },
            extensions: ['.js', '.css', '.less', '.html']
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: ['eslint', 'source-map-loader'],
                    enforce: 'pre',
                    exclude: /node_modules/
                },
                {
                    test: /\.js$/,
                    exclude: /(node_modules)/,
                    include: srcPath,
                    use: [
                        {
                            loader: 'babel-loader'
                        }
                    ]
                },
                {
                    test: /\.less$/,
                    include: srcPath,
                    use: cssLoaderConfig,
                    exclude: /(node_modules)/
                },
                {
                    test: /\.html$/,
                    include: srcPath,
                    use: ['html-loader']
                }
            ]
        },
        resolveLoader: {
            moduleExtensions: ['-loader']
        },
        externals: [
            {
                angular: {
                    root: 'angular',
                    commonjs2: 'angular',
                    commonjs: 'angular',
                    amd: 'angular'
                }
            },
            {
                moment: {
                    root: 'moment',
                    commonjs2: 'moment',
                    commonjs: 'moment',
                    amd: 'moment'
                }
            }
        ],
        node: {
            Buffer: false
        },
        devServer: {
            contentBase: distPath,
            publicPath: '/',
            historyApiFallback: true,
            clientLogLevel: 'none',
            noInfo: true,
            hot: false,
            quiet: false,
            open: false,
            host: '0.0.0.0',
            port: 8282,
            disableHostCheck: true
        },
        plugins
    };
}
module.exports = webpackConfig;
function nodeModulesPath(filePath) {
    return path.join(__dirname, 'node_modules', filePath);
}
