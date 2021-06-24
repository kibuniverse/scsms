module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'linebreak-style': ['off', 'windows'],
    indent: ['off', 2], // 缩进
  },
};
