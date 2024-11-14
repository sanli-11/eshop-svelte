<script lang="ts">
  import address from "$lib/data/address";
  import phone from "$lib/data/phone_number";
  import socialLinks from "$lib/data/social_links";
  import LangMenu from "./LangMenu.svelte";
</script>

<div
  class=" flex flex-col items-center justify-between gap-x-12 gap-y-4 lg:flex-row"
>
  <div class="flex gap-x-8 text-sm text-white">
    {#each [address, phone] as labelledLink (labelledLink.id)}
      <a class="flex gap-x-2.5 font-semibold" href={labelledLink.link}>
        <span class="scale-110">{@html labelledLink.icon}</span>
        {labelledLink.label}
      </a>
    {/each}
  </div>
  <div class="flex items-center justify-center gap-x-12">
    <LangMenu />
    <div class="flex gap-x-6">
      {#each socialLinks as social}
        <a href={social.link} class="text-white">
          {@html social.icon}
        </a>
      {/each}
    </div>
  </div>
</div>
