module.exports = {
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module",
    experimentalObjectRestSpread: true
  },
  plugins: [
    "fp",
    "better",
    "import"
  ],
  rules: {
    // eslint-plugin-fp rules
    "fp/no-arguments": 1,
    "fp/no-class": 1,
    "fp/no-delete": 1,
    "fp/no-events": 1,
    "fp/no-get-set": 1,
    "fp/no-let": 1,
    "fp/no-loops": 1,
    "fp/no-mutating-assign": 1,
    "fp/no-mutating-methods": 1,
    "fp/no-mutation": 1,
    "fp/no-nil": 1,
    "fp/no-proxy": 1,
    "fp/no-rest-parameters": 1,
    "fp/no-this": 1,
    "fp/no-throw": 1,
    "fp/no-unused-expression": 1,
    "fp/no-valueof-field": 1,
    // eslint-plugin-better rules
    "better/no-ifs": 1,
    "better/no-instanceofs": 1,
    "better/no-new": 1,
    "better/explicit-return": 1,
    // explicitly disable things handled by eslint-plugin-fp
    "better/no-classes": 0,
    "better/no-deletes": 0,
    "better/no-exceptions": 0,
    "better/no-exports": 0,
    "better/no-fors": 0,
    "better/no-function-expressions": 0,
    "better/no-imports": 0,
    "better/no-nulls": 0,
    "better/no-reassigns": 0,
    "better/no-switches": 0,
    "better/no-this": 0,
    "better/no-typeof": 0,
    "better/no-undefined": 0,
    "better/no-variable-declaration": 0,
    "better/no-whiles": 0,
    // eslint-plugin-import rules
    "import/no-commonjs": 1,
    "import/no-amd": 1,
    "import/export": 1,
    // eslint standard rules
    "no-var": 1,
    "prefer-spread": 1
  }
};
