// /* eslint-disable @typescript-eslint/explicit-function-return-type */
// const   spath = require("path");
// const withLess = require('@zeit/next-less');
// const withPlugins = require('next-compose-plugins');
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

require("dotenv").config();

const nextConfig = {
  webpack: (config, { isServer }) => {
    // config.resolve.alias['../../theme.config$'] = path.join(
    //   __dirname,
    //   'src/semantic-ui/theme.config',
    // );
    // config.resolve.alias['../semantic-ui/site'] = path.join(
    //   __dirname,
    //   'src/semantic-ui/site',
    // );
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 1000,
          name: "[name].[ext]",
          outputPath: "static/css/",
          publicPath: "/_next/static/css/",
          esModule: false
        }
      }
    });

    config.module.rules.push({
      test: /\.(svg|png|jpg|gif)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 1000,
          name: "[name].[ext]",
          outputPath: "static/img/",
          publicPath: "/_next/static/img/",
          esModule: false
        }
      }
    });

    if (isServer) {
      return config;
    }

    const isProduction = config.mode === "production";
    if (!isProduction) {
      return config;
    }

    // config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));

    return config;
  }
};

module.exports = {
  env: {
    API_URL: process.env.API_URL,
    API_WS_URL: process.env.API_WS_URL,
    VERSION: process.env.VERSION,
    GIT_COMMIT: process.env.GIT_COMMIT
  },
  ...nextConfig
  // assetPrefix: 'https://asdf.com/',
  // ...withLess(nextConfig),
};
