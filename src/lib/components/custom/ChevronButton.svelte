<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import { buttonVariants } from "$lib/components/ui/button/index";
  import type { Snippet } from "svelte";

  const { position, children }: { position: string; children: Snippet } =
    $props();
</script>

<Button
  class={`${buttonVariants({ variant: "outline", size: "icon" })} absolute ${position} rounded-full border-none text-main lg:shadow-sm hover:shadow-sm bg-white/40 transition-transform ease-in-out hover:scale-125 hover:bg-white hover:text-main`}
>
  {@render children()}
</Button>
