const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
// import webpack from 'webpack'

const LAUNCH_COMMAND = process.env.npm_lifecycle_event;
const is_production = LAUNCH_COMMAND === 'build' ? true : false;

const baseConfig = {
    entry: ['./src/index.js'],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].bundle.js',
        publicPath: is_production ? '/public/' : '/'
    },
    resolve: {
        extensions: [".js", ".json", ".ts", ".tsx"],
    },
};

const devConfig = {
    devServer: {
        hot: true,
        port: 3000,
        // open: true,
        static: {
            directory: path.join(__dirname, 'public'),
        },
        client: {
            overlay: {
                warnings: false
            }
        },
        historyApiFallback: true,
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'swc-loader',
                    options: {
                        jsc: {
                            parser: {
                                syntax: "ecmascript",
                                jsx: true,
                            },
                            transform: {
                                react: {
                                    pragma: 'React.createElement',
                                    pragmaFrag: 'React.Fragment',
                                    throwIfNamespace: true,
                                    development: true,
                                    useBuiltins: false
                                }
                            }
                        }
                    }
                }
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "swc-loader",
                    options: {
                        jsc: {
                            parser: {
                                syntax: "typescript"
                            }
                        }
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s*ss$/,

            }
        ]
    },
    plugins: [
        new ESLintPlugin({ exclude: ['webpack.config.js', '.swcrc'] }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: __dirname + '/public/index.html',
            inject: 'body',
            hash: true
        })
    ]
};

const prodConfig = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'swc-loader',
                    options: {
                        jsc: {
                            parser: {
                                syntax: "ecmascript",
                                jsx: true,
                            },
                            transform: {
                                react: {
                                    pragma: 'React.createElement',
                                    pragmaFrag: 'React.Fragment',
                                    throwIfNamespace: true,
                                    development: true,
                                    useBuiltins: false
                                }
                            }
                        }
                    }
                }
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "swc-loader",
                    options: {
                        jsc: {
                            parser: {
                                syntax: "typescript"
                            }
                        }
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: __dirname + '/public/index.html',
            inject: 'body',
            hash: true,
            publicPath: '/',
            favicon: './src/assets/img/favicon.ico'
        })
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/](!lodash)/,
                    name(module) {
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                        return `npm.${packageName.replace('@', '')}`;
                    },
                },
            },
        },
    }
};

module.exports = is_production ?
    {
        ...baseConfig,
        ...prodConfig
    }
    :
    {
        ...baseConfig,
        ...devConfig
    };