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
      rules: {
        '@typescript-eslint/no-confusing-non-null-assertion': 'error',
        '@typescript-eslint/no-confusing-void-expression': [
          'error',
          { ignoreArrowShorthand: true }
        ],
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/promise-function-async': ['error', { checkArrowFunctions: false }],
        '@typescript-eslint/space-before-function-paren': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
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
