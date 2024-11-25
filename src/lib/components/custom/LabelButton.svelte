<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import { buttonVariants } from "$lib/components/ui/button/index.js";
  import type { linkType } from "$lib/types/link";
  const { id, icon, label, link }: linkType = $props();

  let shownIcon = $state(icon!.normal);

  // TODO: Find a better alternative to () => {}
  let onmouseenter =
    typeof icon !== "undefined" && Object.hasOwn(icon, "hover")
      ? () => (shownIcon = icon!.hover!)
      : () => {};
  let onmouseleave =
    typeof icon !== "undefined" && Object.hasOwn(icon, "hover")
      ? () => (shownIcon = icon!.normal)
      : () => {};
</script>

<Button
  class={`${buttonVariants({ variant: "ghost" })} flex gap-x-4 bg-main text-white hover:font-semibold hover:text-main`}
  {onmouseenter}
  {onmouseleave}
>
  {#if typeof icon !== "undefined"}
    <i class={shownIcon}></i>
    {label}
  {/if}
</Button>
