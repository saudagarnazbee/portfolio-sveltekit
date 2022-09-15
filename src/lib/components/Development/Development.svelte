<script lang="ts">
  import { html as markdown } from '../../../docs/development.md';

  export let datas: any = [];

  let selectedHeader: string = 'technology';
  let ascendingOrder: boolean = true;

  function sorting(colHeader: string) {
    datas = datas.sort((obj1: any, obj2: any) => {
      if (colHeader === 'technology') {
        if (obj1.name < obj2.name) {
          return -1;
        } else if (obj1.name > obj2.name) {
          return 1;
        }
      }
      return 0;
    });

    ascendingOrder = !ascendingOrder;

    if (!ascendingOrder) {
      datas = datas.reverse();
    }
    selectedHeader = colHeader;
  }
</script>

<div class="text-center">
  <div id="development">
    <h2 class="pt-20 pb-14 text-4xl font-bold">Development</h2>
  </div>
</div>
<div class="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
  <div class="prose prose-xl text-justify prose-p:text-base prose-a:text-red-500">
    {@html markdown}
  </div>

  <div class="mt-4 max-h-96 w-full overflow-hidden overflow-scroll rounded-lg shadow-lg">
    <table class="table w-full">
      <thead>
        <tr class="sticky top-0 bg-gray-100 font-bold">
          <!-- dangerous can cause xss attack -->
          <th class="py-4 pl-6 hover:underline" on:click={() => sorting('technology')}
            >Technology {@html selectedHeader == 'technology'
              ? ascendingOrder
                ? '&#9661;'
                : '&#9651;'
              : ''}</th
          >
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-300">
        {#each datas as data}
          <tr>
            <td class="flex justify-center bg-white py-4 pl-6"
              ><svelte:component this={data.logoPath} width="30" height="30" class="mr-2" /><span
                >{data.name}</span
              ></td
            >
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
