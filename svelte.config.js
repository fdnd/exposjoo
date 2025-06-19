import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default {
  kit: {
    adapter: adapter({
      fallback: '404.html'
    }),
    prerender: {
      entries: ['/', '/about/', '/404/'],
      handleHttpError: ({ _path, _referrer, message }) => {
        // Ignore 404s for missing pages during prerender
        if (message.includes('404')) {
          return
        }
        // Throw other errors
        throw new Error(message)
      }
    },
    paths: {
      base: '/exposjoo'
    }
  },
  preprocess: vitePreprocess()
}