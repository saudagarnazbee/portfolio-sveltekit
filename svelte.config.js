import adapterStatic from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

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
      // base: dev ? '' : '/portfolio-sveltekit'
    },
    prerender: {
      crawl: true,
      enabled: true,
      onError: 'fail'
    },
    trailingSlash: 'always'
  }
};

export default config;
