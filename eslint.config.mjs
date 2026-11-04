import tseslint from 'typescript-eslint';
export default tseslint.config({ ignores: ['dist/**', 'coverage/**', 'e2e/**', 'test-results/**'] }, ...tseslint.configs.recommended, { files: ['src/**/*.ts'], rules: { '@typescript-eslint/no-empty-function': 'off', '@typescript-eslint/no-unused-vars': 'warn', '@typescript-eslint/no-explicit-any': 'warn' } });
