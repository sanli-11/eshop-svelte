<script lang="ts">
  import features from "$lib/data/feature";
  import { Headset, ShieldCheck, Smile, Truck } from "lucide-svelte";
  import { fade } from "svelte/transition";
  import HeroFeature from "$lib/components/custom/HeroFeature.svelte";
  import sponsors from "$lib/data/sponsor";

  const className =
    "size-8 transition-all group-hover:size-10 duration-300 ease-out group-hover:-ml-1 text-main";

  let visible = $state(1);

  $effect(() => {
    const interval = setInterval(
      () => (visible = visible === 1 ? 2 : 1),
      10000,
    );

    return () => clearInterval(interval);
  });
</script>

{#if visible === 1}
  <div
    in:fade={{ duration: 400, delay: 400 }}
    out:fade={{ duration: 400 }}
    class="mx-8 my-12 grid grid-cols-2 grid-rows-2 gap-x-12 max-lg:gap-y-8 lg:grid-cols-4 lg:grid-rows-none"
  >
    {#each features as feature, index (feature.id)}
      <HeroFeature {...feature}>
        {#if index === 0}
          <Headset class={className}></Headset>
        {:else if index === 1}
          <ShieldCheck class={className}></ShieldCheck>
        {:else if index === 2}
          <Truck class={className}></Truck>
        {:else}
          <Smile class={className}></Smile>
        {/if}
      </HeroFeature>
    {/each}
  </div>
{:else if visible === 2}
  <div
    in:fade={{ duration: 400, delay: 400 }}
    out:fade={{ duration: 400 }}
    class="mx-8 my-12 grid grid-cols-3 grid-rows-2 gap-x-12 max-lg:gap-y-8 lg:grid-cols-6 lg:grid-rows-none"
  >
    {#each sponsors as sponsor, i (i)}
      <img
        class="aspect-video h-12 w-full"
        src={sponsor.src}
        alt={sponsor.alt}
      />
    {/each}
  </div>
{/if}
