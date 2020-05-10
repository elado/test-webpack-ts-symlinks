const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.[jt]sx?/,
        use: "babel-loader",
        include: [
          path.join(__dirname, "src"),
          path.join(__dirname, "../pkg/src"),
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    // symlinks: false,
    alias: {
      "@elado/pkg": path.join(__dirname, "../pkg/src"),
    },
  },
};

console.log("module.exports", JSON.stringify(module.exports, null, 2));
