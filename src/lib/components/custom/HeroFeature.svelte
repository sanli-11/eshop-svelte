<script lang="ts">
  import type { featureType } from "$lib/types/feature";
  import type { Snippet } from "svelte";

  const {
    id,
    title,
    description,
    children,
  }: featureType & { children: Snippet } = $props();
</script>

<div {id} class="group flex items-center justify-start gap-x-4">
  {@render children()}
  <div
    class="flex flex-col items-start justify-center transition-all group-hover:ml-1 group-hover:scale-105"
  >
    <span class="font-medium">{title}</span>
    <span class="text-sm font-light">{description}</span>
  </div>
</div>
