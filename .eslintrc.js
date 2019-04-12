module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier/react"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "react-hooks", "prettier"],
  rules: {
    "react/prop-types": [2, { ignore: ["dispatch", "children", "history"] }],
    "prettier/prettier": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
