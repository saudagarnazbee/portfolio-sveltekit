<script lang="ts">
  import { contacts } from '$lib/components/Contact/contact';
</script>

<footer class="items-center pb-8 text-center" style="background-color: rgb(247, 247, 232);">
  <div class="mb-8 flex justify-center">
    <div class="h-px w-[50px] shrink-0 bg-gray-200" role="separator" />
  </div>

  <a
    href="https://yayasansofa.onpay.my/order/form/tanah-mantau"
    rel="noopener noreferrer"
    target="_blank"
    class="rounded-full bg-slate-800 py-2 px-4 font-bold text-white hover:bg-red-500"
  >
    Let's Infaq
  </a>

  <!-- nav -->
  <div>
    <ul>
      <!-- not smooth scrolling with svelte -->
      <li class="inline-block pt-3 text-sm text-red-500 hover:underline">
        <a href="#main">main</a>
      </li>
      <li class="inline-block pt-3 text-sm text-red-500 hover:underline">
        <a href="#project">project</a>
      </li>
      <li class="inline-block pt-3 text-sm text-red-500 hover:underline">
        <a href="#development">development</a>
      </li>
      <li class="inline-block pt-3 text-sm text-red-500 hover:underline">
        <a href="#experience">experience</a>
      </li>
    </ul>
  </div>
  <!--end nav -->

  <!-- made -->
  <p class="mt-3 text-sm text-gray-500">
    Made with<span class="mx-1 text-red-500">❤️</span>by
    <span class="font-bold">Nazrin Zulkifli</span>
  </p>
  <!-- end made -->

  <!-- Contact -->
  <div>
    <ul>
      {#each contacts as { name, url }}
        <li class="pt-3 text-sm text-red-500 hover:underline">
          <a rel="noopener noreferrer" target="_blank" href={url}>{name}</a>
        </li>
      {/each}
    </ul>
  </div>
  <!-- end Contact -->
</footer>
