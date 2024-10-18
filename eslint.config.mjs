// https://github.com/antfu/eslint-config#customization
import antfu from '@antfu/eslint-config'
// workaround for flat config not being supported yet by eslint-plugin-tailwindcss
// https://github.com/francoismassart/eslint-plugin-tailwindcss/issues/280
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu(
  {
    ignores: ['src-tauri/**', 'src/components/ui/**', '.vscode/**', '.cargo/**'],
    react: true,
    typescript: {
      tsconfigPath: 'tsconfig.json',
    },
    formatters: {
    /**
     * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
     * By default uses Prettier
     */
      css: true,
      /**
       * Format HTML files
       * By default uses Prettier
       */
      html: true,
      /**
       * Format Markdown files
       * Supports Prettier and dprint
       * By default uses Prettier
       */
      markdown: 'prettier',
    },
  },
  ...compat.config({
    // https://github.com/francoismassart/eslint-plugin-tailwindcss
    extends: ['plugin:tailwindcss/recommended'],
    rules: {
      'n/prefer-global/process': 'off',
      'no-console': 'off',
      'antfu/no-top-level-await': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      'tailwindcss/no-custom-classname': 'off',
    },
  }),
)
