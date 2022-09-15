import { sveltekit } from '@sveltejs/kit/vite';
import svg from '@poppanator/sveltekit-svg';
import { imagetools } from 'vite-imagetools';
// import { mdPlugin} from 'vite-plugin-markdown';
import { plugin as mdPlugin } from 'vite-plugin-markdown';
// const mdPlugin = require('vite-plugin-markdown')

const svgPlugin = svg({
  svgoOptions: {
    multipass: true,
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false
          }
        }
      },
      'removeDimensions'
    ]
  }
});

// https://github.com/JonasKruckenberg/imagetools/issues/160#issuecomment-965021959
// const imagetoolsCustomDefaultDirective = {
//   defaultDirectives: (id) => {
//     //TODO: try imitate https://nextjs.org/docs/api-reference/next/image#layout
//     if (id.searchParams.has('fill')) {
//       return new URLSearchParams('width=640;750;2048;3840&format=webp;avif;&fit=fill&metadata&srcset');
//     }
//     return new URLSearchParams();
//   }
// }

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit(), svgPlugin, imagetools(), mdPlugin({ mode: ['html', 'toc'] })],
  build: {
    // https://github.com/vitejs/vite/issues/6985
    target: 'esnext'
  }
};

export default config;
