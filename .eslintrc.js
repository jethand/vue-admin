module.exports = {
  root: true,
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    'vue/require-v-for-key': 'off',
    'vue/valid-v-for': 'off',
    'no-undef': 'off',
    'semi': ['error', 'always'],
    'no-new': 'off',
    'no-trailing-spaces': 'off',
    'no-unused-vars': 'off',
    'no-unused-expressions': 'off',
    'no-eval': 'off',
    'no-irregular-whitespace': 'off',
    'line-comment-position': 'off',
    'multiline-comment-style': 'off',
    'spaced-comment': 'off',
    'no-empty-pattern': 'off',
    'handle-callback-err': 'off',
    'no-extend-native': 'off'
  }
};
