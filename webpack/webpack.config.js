const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module:{
    rules:[
      {/*loaders*/
          test:/\.html$/,
          use:[
            {
              loader:"html-loader",
              options:{
                minimize:false,
                },
          },
        ],
      },
      {
        test:/\.scss$/,
        use:
          ["style-loader","css-loader","sass-loader"]
      }
    ],
  },
  plugins:[
    /* einstellung fur die plugins */
    new htmlWebpackPlugin({
      template:"./src/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].scss",
       chunkFilename: "[id].scss",
    }),
  ],
};