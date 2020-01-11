module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["node", "prettier", "@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "prettier/@typescript-eslint",
    "plugin:node/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: ["./tsconfig.json", "./babel.config.js"]
  },
  rules: {
    "@typescript-eslint/ban-ts-ignore": 1,
    "@typescript-eslint/ban-types": 0,
    "@typescript-eslint/consistent-type-definitions": 1,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/no-var-requires": 1,
    "@typescript-eslint/no-dynamic-delete": 1,
    "@typescript-eslint/no-empty-function": 1,
    "@typescript-eslint/no-empty-interface": 1,
    "@typescript-eslint/no-extra-non-null-assertion": 1,
    "@typescript-eslint/no-for-in-array": 1,
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/no-inferrable-types": 0,
    "@typescript-eslint/no-namespace": 1,
    "@typescript-eslint/no-require-imports": 1,
    "@typescript-eslint/no-this-alias": 1,
    "@typescript-eslint/no-unused-vars-experimental": 1,
    "@typescript-eslint/no-useless-constructor": 1,
    "@typescript-eslint/prefer-regexp-exec": 1,
    "@typescript-eslint/prefer-string-starts-ends-with": 1,
    "@typescript-eslint/require-array-sort-compare": 1,
    "@typescript-eslint/restrict-plus-operands": 1,
    "@typescript-eslint/unbound-method": 1,
    "@typescript-eslint/no-non-null-assertion": 1
  }
};
