<script lang="ts">
  import address from "$lib/data/address";
  import phone from "$lib/data/phone_number";
  import socialLinks from "$lib/data/social_links";
  import IconLink from "../svelte/IconLink.svelte";
  import LabelledLink from "../svelte/LabelledLink.svelte";
  import LangMenu from "../svelte/LangMenu.svelte";
</script>

<div
  class=" flex flex-col items-center justify-between gap-x-12 gap-y-4 lg:flex-row"
>
  <ul class="flex gap-x-8 text-sm text-white">
    {#each [address, phone] as labelledLink (labelledLink.id)}
      <LabelledLink {...labelledLink} />
    {/each}
  </ul>
  <div class="hidden items-center justify-center gap-x-12 lg:flex">
    <LangMenu />
    <ul class="flex gap-x-6">
      {#each socialLinks as social (social.id)}
        <IconLink {...social} />
      {/each}
    </ul>
  </div>
</div>
