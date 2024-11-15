<script lang="ts">
  import type { linkType } from "$lib/types/link";

  const { id, iconPack, icon, label, link }: linkType = $props();
</script>

<li class="transition-transform hover:scale-110">
  <a href={link} class="text-white">
    <i class={`hover:scale-105 ${iconPack} ${icon}`}>
      <span class="hidden">{label}</span>
    </i>
  </a>
</li>
