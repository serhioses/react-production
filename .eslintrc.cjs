module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:css-import-order/recommended',
    'plugin:i18next/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      env: {
        node: true,
      },
      files: ['webpack.config.ts', 'jest.config.ts'],
      rules: {
        'no-restricted-exports': 0,
      },
    },
    {
      env: {
        browser: true,
      },
      files: ['src/storybook/**/*', 'src/**/*.stories.{ts,tsx}'],
      rules: {
        'no-restricted-exports': 0,
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
  },
  ignorePatterns: ['.eslintrc.cjs', 'generateChromaticConfig.js', 'json-server/**/*', 'src/app/types'],
  plugins: ['import', '@typescript-eslint', 'react', 'css-import-order', 'i18next', 'prettier'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  rules: {
    'newline-before-return': 'error',
    'no-multiple-empty-lines': 2,
    'no-restricted-exports': [
      'error',
      {
        restrictDefaultExports: {
          direct: true,
          named: false,
          defaultFrom: true,
          namedFrom: true,
          namespaceFrom: true,
        },
      },
    ],
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
    'react/jsx-boolean-value': ['error', 'always'],
    'react/require-default-props': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-no-bind': [
      2,
      {
        allowArrowFunctions: true,
        allowFunctions: true,
      },
    ],
    'react/function-component-definition': 'off',
    'import/no-unresolved': 'error',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'i18next/no-literal-string': 'warn',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'configs/**/*',
          'src/**/*.test.{ts,tsx}',
          'src/jest-setup.ts',
          'src/tests/**/*',
          'src/**/*.stories.{ts,tsx}',
          'src/storybook/*',
          'webpack.config.ts',
        ],
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['sibling', 'parent'], 'index', 'unknown'],
        pathGroups: [
          {
            pattern: '{react*,react*/**}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'shared/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'entities/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'features/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'widgets/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'pages/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'app/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'tests/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '__mocks__/**',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
      },
    ],
  },
};
