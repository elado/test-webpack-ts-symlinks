// .babelrc doesn't seem to support symlinks with babel-loader

module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
};
