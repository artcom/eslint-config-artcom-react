module.exports = {
  extends: [
    "airbnb",
    "artcom/rules/base.json",
    "./rules/react.json"
  ].map(require.resolve)
}
