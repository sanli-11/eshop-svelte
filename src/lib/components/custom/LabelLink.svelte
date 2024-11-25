<script lang="ts">
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

{#if typeof icon !== "undefined"}
  <a
    {id}
    href={link}
    class="flex gap-x-2.5 text-white transition-transform hover:scale-105"
    {onmouseenter}
    {onmouseleave}
  >
    <i class={shownIcon}></i>
    <span class="font-semibold">{label}</span>
  </a>
{:else}
  <a {id} href={link} class="text-white transition-transform hover:scale-105">
    <span class="font-semibold">{label}</span>
  </a>
{/if}
