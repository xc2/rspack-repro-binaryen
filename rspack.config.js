const NodePath = require('node:path');

/**
 * @returns {import('webpack').Configuration | import('@rspack/cli').Configuration}
 */
module.exports = function (env) {
  const isRunningWebpack = !(env.RSPACK_SERVE || env.RSPACK_BUNDLE || env.RSPACK_BUILD);
  return {
    mode: "none",
    entry: {main: "./src"},
    optimization: {
      // when minimize is on, importing binaryen will produce error "'import.meta' cannot be used outside of module code"
      minimize: true,
    },
    output: {
      clean: true,
      path: isRunningWebpack
          ? NodePath.resolve(__dirname, "webpack-dist")
          : NodePath.resolve(__dirname, "rspack-dist"),
    },
  };
}

