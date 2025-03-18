/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    themes: {
      // dark: 'github-dark',
      dark: 'dark-plus',
      light: 'github-light',
    },
  }
})