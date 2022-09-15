import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [preprocess({ postcss: true })],
  prerendered: {
    default: true
  },
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '/200.html'
    }),
    paths: {
      // assets: '/portfolio-sveltekit'
      base: dev ? '' : '/portfolio-sveltekit'
    }
  }
};

export default config;
