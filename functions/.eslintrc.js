module.exports = {
  env: {
    node: true, // Enable Node.js global variables
    es6: true, // Enable ES6 features
  },
  parserOptions: {
    ecmaVersion: 2020, // Use the latest ECMAScript version
  },
  extends: [
    "eslint:recommended", // Use recommended rules
    "plugin:react/recommended", // Use recommended rules from eslint-plugin-react
  ],
  settings: {
    react: {
      version: "detect", // Automatically detect the React version
    },
  },
  rules: {
    "no-undef": "off", // Disable no-undef rule for testing
  },
};