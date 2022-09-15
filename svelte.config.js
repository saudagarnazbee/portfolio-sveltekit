import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [preprocess({ postcss: true })],

  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '/200.html',
      // fallback: null,
      precompress: false
    }),
    paths: {
      // assets: '/portfolio-sveltekit'
      base: dev ? '' : '/portfolio-sveltekit'
    }
  }
};

export default config;
