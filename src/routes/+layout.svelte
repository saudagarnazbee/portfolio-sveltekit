<script>
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';
  import '../app.css';

  export const prerender = true;
  export const ssr = false;
</script>

<div class="dark h-screen justify-between overflow-y-scroll font-mono">
  <Header />
  <main class="container mx-auto my-4 px-2">
    <slot />
  </main>
  <Footer />
</div>
