const withSass = require("@zeit/next-sass");

const isProd = process.env.NODE_ENV !== "development";

module.exports = withSass({
  distDir: "build",
  useFileSystemPublicRoutes: true,
  cssModules: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    config.module.rules.push({
      test: /\.(gif|svg|jpe?g|png)\??.*$/,
      loader: "url-loader",
      options: {
        limit: 1024,
        publicPath: "/_next/static/images",
        outputPath: "static/images",
        name: "[name].[hash].[ext]"
      }
    });

    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };

    return config;
  }
});
