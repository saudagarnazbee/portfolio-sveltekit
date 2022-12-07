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
    description: `A blog website built with
    <a
      rel="noopener noreferrer"
      class="text-red-500 hover:underline"
      target="_blank"
      href="https://kit.svelte.dev/">
        Sveltekit</a>,
    <a
      target="_blank"
      class="text-red-500 hover:underline"
      rel="noopener noreferrer"
      href="https://prismic.io/">
      Prismic's
    </a>
    headless CMS,
    <a
      target="_blank"
      class="text-red-500 hover:underline"
      rel="noopener noreferrer"
      href="https://prismic.io/">
      Supabase's
    </a> Postgres database with Storage,
    <a
      target="_blank"
      class="text-red-500 hover:underline"
      rel="noopener noreferrer"
      href="https://supabase.com/">
      Prisma
    </a> an ORM, and
    <a
      target="_blank"
      rel="noopener noreferrer"
      class="text-red-500 hover:underline"
      href="https://m.do.co/c/578f07b75e9b">
      DigitalOcean
    </a>
    hosting. This website will promote content about tips, reviews, technology, and car repair.`,
    techs: ['Tailwind', 'Sveltekit', 'prisma', 'supabase', 'digitalocean']
  }
];
