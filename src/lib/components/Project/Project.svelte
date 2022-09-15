<script lang="ts">
  import Image from '$lib/components/Image.svelte';
  import { projects } from './project';
</script>

<div id="project" class="text-center">
  <h2 class="pt-20 pb-14 text-4xl font-bold">Project</h2>
</div>
<div class="-my-2 py-2 sm:-mx-6 sm:px-12 lg:-mx-8 lg:px-14">
  <div class="mb-14">
    <!-- set grid -->
    <div class="grid">
      {#each projects as { name, image, pageUrl, description, techs }}
        <div
          class="flow grow flex-col overflow-hidden rounded-lg shadow-lg transition-transform hover:-translate-y-2"
        >
          <!-- image  card-->
          <div class="inset-0 h-64 w-full border-b border-gray-200 bg-slate-100 p-8">
            <div
              class="relative h-full w-full overflow-hidden rounded-md border border-gray-100 shadow-lg"
            >
              <a href={pageUrl} target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://place-hold.it/200x200"
                  datasrc={image.datasrc}
                  avifSrcset={image.avif}
                  webpSrcset={image.webp}
                  alt={name}
                />
              </a>
            </div>
          </div>
          <!-- end image card -->

          <div class="p-6">
            <!-- title -->
            <a href={pageUrl} target="_blank" rel="noopener noreferrer" class="link">
              <h3 class="text-xl font-bold">
                {name}
              </h3>
            </a>
            <!-- end title -->

            <!-- button -->
            <div class="mt-3 flex gap-3">
              <a
                href={pageUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="rounded bg-blue-100 py-1 px-2 text-xs font-bold text-blue-800 hover:bg-blue-200"
              >
                See page
              </a>
              <!-- <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="rounded bg-blue-100 py-1 px-2 text-xs font-bold text-blue-800 hover:bg-blue-200"
          >
            See Figma
          </a> -->
            </div>
            <!-- end button -->

            <p class="pt-6 text-gray-500">{@html description}</p>

            <!-- tag -->
            <ul class="mt-2 flex flex-wrap gap-2">
              {#each techs as tech}
                <li class="rounded-md bg-gray-700 px-2 py-[2px] text-xs text-white">{tech}</li>
              {/each}
            </ul>
            <!-- end tag -->
          </div>
        </div>
      {/each}
    </div>

    <!-- <div class="pt-20 text-center">
      <a
        href="https://github.com/saudagarnazbee"
        target="_blank"
        rel="noopener noreferrer"
        class="link text-sm"
      >
        See other projects on GitHub
      </a>
    </div> -->
  </div>
</div>
