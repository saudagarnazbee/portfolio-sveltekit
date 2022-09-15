<script lang="ts">
  import { base } from '$app/paths';
  // I want smooth scrolling
  function scrollToElement(event: { preventDefault: () => void; currentTarget: any }) {
    event.preventDefault();
    const link = event.currentTarget;
    const anchorId = new URL(link.href).hash.replace('#', '');
    const anchor = document.getElementById(anchorId);

    if (!anchor) return;

    anchor.scrollIntoView({
      behavior: 'smooth'
    });
  }
</script>

<header
  class="sticky top-0 z-50 h-14 w-full border-b border-gray-200 bg-white"
  style="background-color: rgb(247, 247, 232);"
>
  <div class="mx-auto flex h-full max-w-5xl items-center justify-between px-4">
    <a href="{base}/"><h2 class="text-xl font-bold">Nazrin Zulkifli</h2></a>
    <nav>
      <ul class="flex gap-x-4 text-xs">
        <li class="hidden md:flex">
          <a on:click={scrollToElement} class="hover:text-red-500 hover:underline" href="#main"
            >main</a
          >
        </li>
        <li class="hidden md:flex">
          <a on:click={scrollToElement} class="hover:text-red-500 hover:underline" href="#project"
            >project</a
          >
        </li>
        <li class="hidden md:flex">
          <a
            on:click={scrollToElement}
            class="hover:text-red-500 hover:underline"
            href="#development">development</a
          >
        </li>
        <li class="hidden md:flex">
          <a
            on:click={scrollToElement}
            class="hover:text-red-500 hover:underline"
            href="#experience">experience</a
          >
        </li>
        <li>
          <a
            href="https://yayasansofa.onpay.my/order/form/tanah-mantau"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-full bg-slate-800 py-2 px-4 font-bold text-white hover:bg-red-500"
          >
            Let's Infaq
          </a>
        </li>
      </ul>
    </nav>
  </div>
</header>
