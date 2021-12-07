module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/ban-types": "off",
    "no-undef": "off",
    camelcase: "off",
    "no-empty-pattern": "off",
    "@typescript-eslint/adjacent-overload-signatures": "off",
    "@typescript-eslint/no-var-requires": "off",
  },
};
