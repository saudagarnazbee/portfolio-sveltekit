import adapterStatic from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

// cannot add sveltekit $app : https://stackoverflow.com/questions/70339952/sveltekit-app-cannot-be-found-in-svelte-config-js
const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [preprocess({ postcss: true })],
  kit: {
    adapter: adapterStatic({
      pages: 'build',
      assets: 'build',
      // fallback: '/index.html',
      fallback: null,
      precompress: false
    }),
    paths: {
      base: dev ? '' : '/portfolio-sveltekit'
    },
    prerender: {
      crawl: true,
      handleHttpError: 'fail'
    }
  }
};

export default config;
