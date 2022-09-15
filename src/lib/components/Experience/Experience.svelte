<script lang="ts">
  export let experiences: any;
</script>

<div id="experience" class="text-center">
  <!-- Experience as linkedin -->
  <h2 class="pt-20 pb-14 text-4xl font-bold">Experience</h2>
</div>
<div class="-my-2 py-2 sm:-mx-6 sm:px-12 lg:-mx-8 lg:px-14">
  {#each experiences as experience}
    <div class="mb-14">
      <!-- tajuk -->
      <a href={experience.url} target="_blank" rel="noopener noreferrer">
        <h3 class="text-xl font-bold">
          <span class="text-red-500 hover:underline">
            {experience.name}
          </span>
        </h3>
      </a>
      <h4 class="text-l font-bold">{experience.role}</h4>
      <!-- end tajuk -->
      <p class="text-sm text-gray-500">{experience.period}</p>

      <!-- explaination -->
      <p class="text-secondary mt-2 text-gray-500">
        {experience.description}
      </p>
      <!-- end explaination -->
      <!-- tag -->
      <ul class="mt-2 flex flex-wrap gap-2">
        {#each experience.techs as tech}
          <li class="rounded-md bg-gray-700 px-2 py-[2px] text-xs text-white">{tech}</li>
        {/each}
      </ul>
      <!-- end tag -->

      <!-- Cerita Pengalaman role -->
      <!-- <p class="text-secondary mt-2 font-bold">What I do :</p>
      <ul class="list-disc pl-4 marker:text-sky-400">
        {#each experience.roleDescriptions as desc}
          <li class="text-justify leading-7"> -->
      <!-- dangerous can cause xss attack -->
      <!-- {@html desc}
          </li>
        {/each}
      </ul> -->
      <!-- end CeritaPengalaman role -->
    </div>
  {/each}
</div>
