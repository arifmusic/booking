const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const PreloadWebpackPlugin = require("preload-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const imageminMozjpeg = require("imagemin-mozjpeg");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const OfflinePlugin = require("offline-plugin");

module.exports = env => {
  if (!env || !env.MODE) {
    throw new Error("webpack --env.MODE option is not specified");
  }

  const isDevMode = env.MODE === "dev";
  const webpackMode = env.MODE === "dev" ? "development" : "production";

  const optimization_dev = {
    minimize: false
  };
  const optimization_prod = {
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          map: {
            inline: false
          }
        }
      }),
      new CompressionPlugin({
        test: /\.(html|css|js)(\?.*)?$/i
      }),
      new FaviconsWebpackPlugin({
        logo: "./client/static/favicon.svg",
        icons: {
          twitter: true,
          windows: true
        }
      }),
      new OfflinePlugin()
    ]
  };
  const optimization = isDevMode ? optimization_dev : optimization_prod;
  return {
    mode: webpackMode,
    devtool: isDevMode ? "inline-source-map" : "source-map",
    entry: "./client/index.js",
    output: {
      filename: "js/bundle.[hash].js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "/"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.s?css$/,
          exclude: /\.module\.scss$/,
          use: [
            isDevMode ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: { sourceMap: true }
            },
            {
              loader: "postcss-loader",
              options: { sourceMap: true }
            },
            {
              loader: "sass-loader",
              options: { sourceMap: true }
            }
          ]
        },
        {
          test: /\.module\.scss$/,
          use: [
            isDevMode ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                modules: true,
                localIdentName: "_[local]_[hash:base64:5]"
              }
            },
            {
              loader: "postcss-loader",
              options: { sourceMap: true }
            },
            {
              loader: "sass-loader",
              options: { sourceMap: true }
            }
          ]
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "images/",
                publicPath: "images/"
              }
            }
          ]
        },
        isDevMode
          ? {
              test: /\.(jpe?g|png|gif|svg)$/,
              use: [
                {
                  loader: "file-loader",
                  options: {
                    name: "[name].[ext]",
                    outputPath: "images/",
                    publicPath: "images/"
                  }
                }
              ]
            }
          : {
              test: /\.(jpe?g|png|gif|svg)$/,
              use: [
                {
                  loader: "file-loader",
                  options: {
                    name: "[name].[ext]",
                    outputPath: "images/",
                    publicPath: "images/"
                  }
                },
                {
                  loader: "image-webpack-loader",
                  options: {
                    mozjpeg: {
                      progressive: true,
                      quality: 65
                    },
                    optipng: {
                      enabled: false
                    },
                    pngquant: {
                      quality: "65-90",
                      speed: 4
                    },
                    gifsicle: {
                      interlaced: false
                    },
                    webp: {
                      quality: 75
                    }
                  }
                }
              ]
            },
        {
          test: /\.(woff|woff2|ttf|otf)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "fonts/",
                publicPath: "fonts/"
              }
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: [".js", ".jsx"]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./client/static/index.html",
        minify: {
          removeScriptTypeAttributes: true
        }
      }),
      new PreloadWebpackPlugin({
        rel: "preload",
        as(entry) {
          if (/\.(woff|woff2|ttf|otf)$/.test(entry)) return "font";
        },
        fileWhitelist: [/\.(woff|woff2|ttf|otf)$/],
        include: "allAssets"
      }),
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: "defer"
      }),
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash].css"
      })
    ],
    optimization
  };
};
