module.exports = {
  extends: [
    "eslint-config-airbnb",
    "eslint-config-artcom/rules/base",
    "./rules/react"
  ].map(require.resolve)
}
