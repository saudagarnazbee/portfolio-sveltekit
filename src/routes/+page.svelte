<script lang="ts">
  import { assets } from '$app/paths';

  import Development from '$lib/components/Development/Development.svelte';
  import LinkedInIcon from '$lib/brands/linkedin.svg';
  import GithubIcon from '$lib/brands/github.svg';
  import { onMount } from 'svelte';
  import lottie, { type AnimationItem } from 'lottie-web';
  import meImage from '$lib/images/naz.png?w=200&h=200&format=jpeg;&imagetools';
  import meImageSrcsetWebp from '$lib/images/naz.png?width=1344;672;336&srcset&imagetools';
  import meImageSrcsetAvif from '$lib/images/naz.png?width=1344;672;336&format=avif&srcset&imagetools';
  import Image from '$lib/components/Image.svelte';
  import { developments } from '$lib/components/Development/development';
  import Experience from '$lib/components/Experience/Experience.svelte';
  import { experiences } from '$lib/components/Experience/experience';
  import Project from '$lib/components/Project/Project.svelte';
  import Kindness from '$lib/components/Kindness/Kindness.svelte';
  import Typewriter from 'svelte-typewriter';
  import dayjs from 'dayjs';
  import utc from 'dayjs/plugin/utc';
  import timezone from 'dayjs/plugin/timezone';
  import isBetween from 'dayjs/plugin/isBetween';
  import { Confetti } from 'svelte-confetti';

  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.extend(isBetween);

  const tz = 'Asia/Kuala_Lumpur';
  const dayJsLocal = dayjs();
  const dayJsMalaysia = dayJsLocal.tz(tz);
  let malaysiaYear = dayJsMalaysia.year();

  let introText = 'Hello, World!';

  let happyMalaysiaDay = dayjs().isBetween(
    dayjs(`${malaysiaYear}-09-11`),
    dayjs(`${malaysiaYear}-09-23`)
  );
  let yogaContainer: HTMLElement;
  let malaysiaContainer: HTMLElement;

  onMount(() => {
    let yogaAnimation: AnimationItem;
    let malaysiaAnimation: AnimationItem;

    if (happyMalaysiaDay && malaysiaContainer) {
      introText = 'Happy Malaysia Day!';
      malaysiaAnimation = lottie.loadAnimation({
        container: malaysiaContainer, // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: `${assets}/lottie/malaysia-flag.json` // the path to the animation json
      });
    }

    if (yogaContainer) {
      yogaAnimation = lottie.loadAnimation({
        container: yogaContainer, // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: `${assets}/lottie/developer-yoga.json` // the path to the animation json
      });
    }

    return () => {
      if (malaysiaContainer) {
        malaysiaAnimation.destroy();
      }

      if (yogaContainer) {
        yogaAnimation.destroy();
      }
    };
  });
</script>

<svelte:head>
  <title>Nazrin Zulkifli</title>
  <meta name="description" content="Nazrin Zulkifli's portfolio website" />
  <meta name="keywords" content="Portfolio, Developer, Back-end, Data Engineer, Nazrin Zulkifli" />
</svelte:head>

<div
  class="rounded-lg bg-white px-6 py-12 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:mx-auto md:max-w-3xl lg:max-w-4xl"
  style="background-color: rgb(247, 247, 232);"
>
  <section>
    <div class="text-center">
      <div id="main">
        <Typewriter mode="loop" interval={70}>
          <h2 class="pb-14 pt-14 text-4xl font-bold">{introText}</h2>
        </Typewriter>
        {#if happyMalaysiaDay}
          <div class="flex justify-center">
            <Confetti
              infinite
              colorArray={['#cc0000', '#ffffff', '#ffd100', '#0032a0']}
              delay={[500, 2000]}
              amount={200}
            />
            <div bind:this={malaysiaContainer} class="animate-fade-in-once h-[33vh]" />
            <Confetti
              infinite
              colorArray={['#cc0000', '#ffffff', '#ffd100', '#0032a0']}
              delay={[500, 2000]}
              amount={200}
            />
          </div>
        {/if}
      </div>
    </div>
    <div class="grid gap-y-6 text-center lg:flex lg:justify-between lg:px-32">
      <!-- Image Circle : -->
      <div class="flex justify-center lg:order-last">
        <!--  overflow-hidden is use for outer section to hide like rounded declare outside will hide the overflow image -->
        <div class="h-44 w-44 overflow-hidden rounded-full border border-gray-200 shadow-lg">
          <Image
            alt="Me"
            datasrc={meImage}
            src="https://place-hold.it/200x200"
            avifSrcset={meImageSrcsetAvif}
            webpSrcset={meImageSrcsetWebp}
            width="200"
            height="200"
            className="mx-auto origin-bottom transition-transform hover:scale-105 bg-orange-400"
          />
        </div>
      </div>
      <!-- End Image Circle -->

      <!-- Name Card -->
      <div class="lg:mt-12 lg:text-right">
        <h1 class="text-3xl font-bold">G'day, I'm Nazrin 👋</h1>
        <p class="text-lg">I'm Backend Developer from Johor.</p>
        <div class="flex justify-center gap-x-3 py-1 lg:justify-end">
          <a
            aria-label="LinkedIn"
            rel="noopener noreferrer"
            class="flex justify-center"
            target="_blank"
            href="https://www.linkedin.com/in/muhamad-nazrin-zulkifli"
          >
            <LinkedInIcon width="30" />
            <!-- <span class="hidden sm:inline">LinkedIn</span> -->
          </a>
          <a
            aria-label="Github"
            rel="noopener noreferrer"
            class="flex justify-center"
            target="_blank"
            href="https://github.com/saudagarnazbee"
          >
            <GithubIcon width="30" />
            <!-- <span class="hidden sm:inline">Github</span> -->
          </a>
        </div>
      </div>
      <!-- End Name Card -->
    </div>
  </section>

  <section>
    <Project />
  </section>

  <section>
    <Development datas={developments} />
  </section>

  <section>
    <div bind:this={yogaContainer} class="animate-fade-in-once h-[33vh] lg:h-[67vh]" />
  </section>

  <section>
    <Experience {experiences} />
  </section>

  <section>
    <Kindness />
  </section>
</div>
