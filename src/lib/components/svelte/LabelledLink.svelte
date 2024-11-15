<script lang="ts">
  import type { linkType } from "$lib/types/link";

  let { id, isHovered, iconPack, icon, altIcon, label, link }: linkType =
    $props();

  const handleMouseIn = () => (isHovered = true);
  const handleMouseOut = () => (isHovered = false);
</script>

<li>
  <a
    {id}
    class="group group flex gap-x-2.5 font-semibold"
    href={link}
    onmouseenter={handleMouseIn}
    onmouseleave={handleMouseOut}
  >
    <i
      class={`${iconPack} ${isHovered ? altIcon : icon} transition-transform group-hover:scale-[1.15]`}
    ></i>
    <address
      class="font-semibold not-italic transition-all group-hover:ml-1 group-hover:scale-110"
    >
      {label}
    </address>
  </a>
</li>
