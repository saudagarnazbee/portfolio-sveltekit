export const projects = [
  {
    name: 'Cikgu Kereta',
    image: {
      datasrc: (await import('$lib/images/cikgukereta.png?w=736&h=191;&imagetools')).default,
      avif: (
        await import('$lib/images/cikgukereta.png?width=1344;672;336&format=avif&srcset&imagetools')
      ).default,
      webp: (
        await import('$lib/images/cikgukereta.png?width=1344;672;336&format=webp&srcset&imagetools')
      ).default
    },
    pageUrl: 'https://cikgukereta.my/',
    description: `A blog website build by using <a rel="noopener noreferrer" class="text-red-500 hover:underline" href="https://kit.svelte.dev/">Sveltekit</a>, headless cms by <a class="text-red-500 hover:underline" rel="noopener noreferrer" href="https://prismic.io/">Prismic</a> and powered by <a rel="noopener noreferrer" class="text-red-500 hover:underline" href="https://m.do.co/c/578f07b75e9b">DigitalOcean</a>. This website is to promote a content about tips, review, technology and repairing cars.`,
    techs: ['Tailwind', 'Sveltekit']
  }
];
