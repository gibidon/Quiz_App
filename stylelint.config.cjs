module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
  ],
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],
  rules: {
    'no-empty-source': null, 
    'selector-class-pattern': null
  },
}
