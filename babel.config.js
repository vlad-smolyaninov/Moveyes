module.exports = {
  presets: ['module:metro-react-native-babel-preset', 'module:react-native-dotenv', 'mobx'],
  "plugins": [
    ["@babel/plugin-transform-flow-strip-types"],
]
};
