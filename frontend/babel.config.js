module.exports = {
  presets: ["next/babel"],
  plugins: [
    ["relay", { artifactDirectory: "./src/__generated__" }],
    "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-class-properties"
  ]
};
