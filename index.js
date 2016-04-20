module.exports = {
  extends: [
    "eslint-config-airbnb",
    "eslint-config-artcom/rules/base.json",
    "./rules/react.json"
  ].map(require.resolve)
}
