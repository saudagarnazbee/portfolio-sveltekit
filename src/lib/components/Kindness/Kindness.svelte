<script lang="ts">
  import { html as markdown } from '../../../docs/kindness.md';
</script>

<div class="text-center">
  <h2 class="pt-20 pb-14 text-4xl font-bold">Kindness</h2>
</div>
<div class="-my-2 py-2 sm:-mx-6 sm:px-12 lg:-mx-8 lg:px-14">
  <div class="mb-14">
    <div class="prose prose-lg justify-center prose-a:text-red-500">
      {@html markdown}
    </div>
  </div>
</div>
