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

  // TODO: Logic to make second span stateful
</script>

{#if typeof icon !== "undefined" && typeof id !== "undefined"}
  <a
    {id}
    aria-label={label}
    href={link}
    class="hidden gap-x-4 bg-main text-white transition-transform hover:scale-105 hover:bg-main hover:text-white lg:flex"
    {onmouseenter}
    {onmouseleave}
  >
    <i class={`${shownIcon} text-2xl group-hover:scale-105`}></i>
    <div
      class="flex h-full flex-col items-start justify-between gap-y-0.5 text-white"
    >
      <span class="text-xs">
        {label}
      </span>
      <span
        class={`text-xs font-bold ${label === "Cart" && "before:mr-0.5 before:content-['$']"} `}
      >
        Stateful
      </span>
    </div>
  </a>
{/if}
