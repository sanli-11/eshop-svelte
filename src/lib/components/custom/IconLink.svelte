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
    aria-label={label}
    href={link}
    target="_blank"
    class="text-white transition-transform hover:scale-110"
    {onmouseenter}
    {onmouseleave}
  >
    <i class={shownIcon}></i>
  </a>
{/if}
