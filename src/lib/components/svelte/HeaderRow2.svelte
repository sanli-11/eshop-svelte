<script lang="ts">
  import NavMenuButton from "$lib/components/custom/NavMenuButton.svelte";
  import QuickLink from "$lib/components/custom/QuickLink.svelte";
  import SearchBar from "$lib/components/custom/SearchBar.svelte";
  import quickLinks from "$lib/data/quick_links";
</script>

<div
  class="logo flex items-center justify-between gap-x-8 gap-y-4 pb-2 lg:justify-evenly lg:py-0"
>
  <h1
    class="cursor-pointer select-none text-nowrap font-['Questrial'] text-3xl font-bold tracking-wide text-white"
  >
    e-shop
  </h1>
  <NavMenuButton />
  <SearchBar />
  <nav
    aria-labelledby="secondary-navigation"
    class="hidden items-center justify-end gap-x-6 lg:flex"
  >
    {#each quickLinks as link (link.id)}
      <QuickLink {...link} />
    {/each}
  </nav>
</div>
