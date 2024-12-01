<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import { buttonVariants } from "$lib/components/ui/button/index";
  import src from "/src/assets/images/banner-1.png";

  let alt: string = "iPhone 16 Lineup";
</script>

<div
  id="Hero"
  class="relative grid rounded-b-2xl bg-overlay max-lg:h-3/4 max-lg:grid-flow-row max-lg:auto-rows-auto lg:h-1/4 lg:grid-cols-5 lg:grid-rows-none lg:gap-x-16"
>
  <div
    class="mx-16 my-20 flex flex-col items-center justify-center gap-y-4 text-center lg:col-span-2 lg:my-auto lg:items-start lg:text-start"
  >
    <h2 class="text-4xl font-black leading-tight tracking-wide">
      Your One-Stop Electronic Market
    </h2>
    <p class="leading-6 text-stone-700">
      Welcome to e-shop, a place where you can buy everything about electronics.
      Sale every day!
    </p>
    <Button
      class={`${buttonVariants({ variant: "default", size: "lg" })} mt-12 bg-main font-bold lg:mt-4`}
      >Shop Now</Button
    >
  </div>
  <div class="max-lg:mx-auto max-lg:w-[90%] lg:col-span-3">
    <img
      class="inset-0 size-full bg-cover"
      {src}
      {alt}
      width="1920"
      height="1080"
    />
  </div>
</div>
