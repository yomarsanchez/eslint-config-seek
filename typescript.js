module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  extends: ['./.eslintrc.js'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
        'standard-with-typescript'
      ],
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/no-confusing-non-null-assertion': 'error',
        '@typescript-eslint/no-confusing-void-expression': [
          'error',
          { ignoreArrowShorthand: true }
        ],
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/promise-function-async': ['error', { checkArrowFunctions: false }],
        '@typescript-eslint/space-before-function-paren': 'off',
        '@typescript-eslint/switch-exhaustiveness-check': 'error'
      }
    },
    {
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'error'
      }
    }
  ]
}
