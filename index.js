module.exports = {
  extends: "artcom",
  parserOptions: {
    ecmaFeatures: {
      "jsx": true
    }
  },
  plugins: [
    "react"
  ],
  rules: {
    "no-console": 0,

    "react/jsx-boolean-value": 2,
    "react/jsx-closing-bracket-location": [2, "after-props"],
    "react/jsx-curly-spacing": [2, "always"],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-key": 2,
    "react/jsx-no-bind": [2, { "ignoreRefs": true, "allowArrowFunctions": true }],
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-pascal-case": 2,
    "react/jsx-tag-spacing": 2,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/no-deprecated": 2,
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    "react/no-direct-mutation-state": 2,
    "react/no-is-mounted": 2,
    "react/no-multi-comp": [2, { "ignoreStateless": true }],
    "react/no-string-refs": 2,
    "react/no-unknown-property": 2,
    "react/prefer-es6-class": 2,
    "react/prefer-stateless-function": 2,
    "react/react-in-jsx-scope": 2,
    "react/require-render-return": 2,
    "react/self-closing-comp": 2,
    "react/sort-comp": [2, {
      "order": ["static-methods", "lifecycle", "render", "everything-else"]
    }]
  }
}
