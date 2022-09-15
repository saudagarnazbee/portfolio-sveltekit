<script lang="ts">
  // credit to: https://github.com/jessebenjamin1/jbsks/blob/main/src/lib/components/Image.svelte
  //   import { createLoadObserver } from './createLoadObserver';
  //   let loaded = false;
  //   const onload = createLoadObserver(() => {
  //     loaded = true;
  //     console.log(loaded);
  //   });
  export let avifSrcset: string = '';
  export let webpSrcset: string = '';
  export let src: string = '';
  export let datasrc: string = '';
  export let alt: string = '';
  export let width: string | null | undefined = undefined;
  export let height: string = '';
  export let className: string = '';
  export let decoding: HTMLImageElement['decoding'] = 'async';
  export let loading: HTMLImageElement['loading'] = 'lazy'!;

  const sizes = '(max-width: 672px) calc(100vw - 32px), 672px';
</script>

<picture>
  <source
    data-sizes={sizes}
    class={className}
    {width}
    {height}
    srcset={avifSrcset}
    type="image/avif"
  />
  <!-- sizes="(max-width: 735px) 100vw, 736px" -->
  <source
    data-sizes={sizes}
    class={className}
    {width}
    {height}
    srcset={webpSrcset}
    type="image/webp"
  />
  <!-- sizes="(max-width: 735px) 100vw, 736px" -->
  <img data-src={datasrc} {loading} class={className} {src} {alt} {width} {height} {decoding} />
</picture>
