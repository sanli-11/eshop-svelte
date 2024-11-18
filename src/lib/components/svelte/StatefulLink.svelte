<script lang="ts">
  import type { linkType } from "$lib/types/link";

  const { id, iconPack, icon, label, link }: linkType = $props();
</script>

<a href={link} class="hidden gap-x-4 bg-main hover:bg-main lg:flex">
  <i class={`${iconPack} ${icon} text-2xl text-white`}></i>
  <div
    class="flex h-full flex-col items-start justify-between gap-0.5 text-white"
  >
    <span class="text-xs">
      {label}
    </span>
    <span class="text-xs font-bold">
      {label}
    </span>
  </div>
</a>
