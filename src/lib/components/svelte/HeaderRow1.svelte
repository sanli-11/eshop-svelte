<script lang="ts">
  import IconLink from "$lib/components/custom/IconLink.svelte";
  import LabelLink from "$lib/components/custom/LabelLink.svelte";
  import LangMenu from "$lib/components/custom/LangMenu.svelte";
  import contactLinks from "$lib/data/contacts";
  import socialLinks from "$lib/data/social_links";
</script>

<div
  class="flex flex-col items-center justify-between gap-x-12 gap-y-4 max-lg:order-2 lg:flex-row"
>
  <ul
    class="flex w-full justify-evenly gap-x-8 text-sm text-white lg:justify-start"
  >
    {#each contactLinks as contact (contact.id)}
      <LabelLink {...contact} />
    {/each}
  </ul>
  <aside
    aria-labelledby="secondary-navigation"
    class="hidden items-center justify-center gap-x-12 lg:flex"
  >
    <LangMenu />
    <ul class="flex gap-x-6">
      {#each socialLinks as social (social.id)}
        <IconLink {...social} />
      {/each}
    </ul>
  </aside>
</div>
