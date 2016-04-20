module.exports = {
  rules: {
    "no-console": "off",
    "react/jsx-closing-bracket-location": ["error", "after-props"],
    "react/jsx-curly-spacing": ["error", "always"],
    "react/prop-types": "off",
    "react/sort-comp": ["error", {
      "order": ["static-methods", "lifecycle", "render", "everything-else"]
    }]
  }
}
