<script lang="ts">
  import ChevronButton from "$lib/components/custom/ChevronButton.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import { buttonVariants } from "$lib/components/ui/button/index";
  import banners from "$lib/data/banner";
  import { ChevronLeft, ChevronRight } from "lucide-svelte";
  import { fade, fly } from "svelte/transition";

  // TODO: Fix the transition showing all divs for millisecond in banner

  let shownBanner = $state(0);
  let isPaused = $state(false);

  $effect(() => {
    const interval = setInterval(!isPaused ? nextBanner : () => {}, 15000);

    return () => clearInterval(interval);
  });

  const prevBanner = () => {
    shownBanner = shownBanner > 0 ? shownBanner - 1 : banners.length - 1;
  };

  const nextBanner = () => {
    shownBanner = shownBanner < banners.length - 1 ? shownBanner + 1 : 0;
  };
</script>

<div
  id="Hero"
  role="banner"
  class="relative rounded-b-3xl bg-overlay py-16 lg:h-auto lg:rounded-b-2xl lg:px-36 lg:py-12"
  onmouseenter={() => (isPaused = true)}
  onmouseleave={() => (isPaused = false)}
>
  <ChevronButton
    onclick={prevBanner}
    position={"lg:top-1/2 lg:-translate-y-1/2 lg:left-16 left-8 top-2/3"}
  >
    <ChevronLeft />
  </ChevronButton>
  {#each banners as banner (banner.id)}
    {#if shownBanner === Number.parseInt(banner.id)}
      <div
        in:fly={{ x: 200, duration: 700, delay: 200 }}
        out:fade={{ duration: 200 }}
        class="grid max-lg:grid-flow-row max-lg:auto-rows-auto lg:grid-cols-5"
      >
        <div
          class="mx-8 my-20 flex flex-col items-center justify-center gap-y-8 text-center lg:col-span-2 lg:m-0 lg:items-start lg:gap-y-6 lg:text-start"
        >
          <h2
            class="text-5xl font-black leading-tight tracking-wide lg:text-4xl"
          >
            {banner.title}
          </h2>
          <p class="w-[90%] leading-6 text-stone-500 lg:text-stone-600">
            {banner.tagline}
          </p>
          <Button
            class="{`${buttonVariants({ variant: 'default', size: 'lg' })} mt-4 bg-main font-bold`}}"
            >Shop Now</Button
          >
        </div>
        <div class="mx-auto w-[90%] lg:col-span-3 lg:ml-auto lg:w-full">
          <img
            class="inset-0 size-full object-cover"
            src={banner.src}
            alt={banner.alt}
            width="1920"
            height="1080"
          />
        </div>
      </div>
    {/if}
  {/each}
  <ChevronButton
    onclick={nextBanner}
    position={"lg:top-1/2 lg:-translate-y-1/2 lg:right-16 right-8 top-2/3"}
  >
    <ChevronRight />
  </ChevronButton>
</div>
