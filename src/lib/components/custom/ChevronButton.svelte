<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import { buttonVariants } from "$lib/components/ui/button/index";
  import type { Snippet } from "svelte";

  const {
    children,
    onclick,
    position,
  }: { children: Snippet; onclick: () => void; position: string } = $props();
</script>

<Button
  class={`${buttonVariants({ variant: "outline", size: "icon" })} absolute ${position} rounded-full border-none bg-white/40 text-main transition-transform ease-in-out hover:scale-125 hover:bg-white hover:text-main hover:shadow-sm lg:shadow-sm`}
  {onclick}
>
  {@render children()}
</Button>
