const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
// 🟢 Loaded the prettier config helper
const eslintConfigPrettier = require('eslint-config-prettier');

module.exports = defineConfig([
  ...expoConfig, // Expo returns an array, spread it if needed by your setup
  {
    ignores: ['node_modules/**', '.expo/**', 'dist/**', 'build/**'],

    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'warn',
    },
  },
  // 🟢 FIX: Placed at the end to override any conflicting formatting rules
  eslintConfigPrettier,
]);
