<script lang="ts">
  import quickLinks from "$lib/data/quick_links";
  import NavMenuButton from "../svelte/NavMenuButton.svelte";
  import SearchBar from "../svelte/SearchBar.svelte";
  import StatefulLink from "../svelte/StatefulLink.svelte";

  // TODO: Change font for h1
</script>

<div
  class="flex items-center justify-between gap-x-12 gap-y-4 pb-2 lg:justify-evenly lg:py-0"
>
  <h1
    class="cursor-pointer select-none text-nowrap text-3xl font-bold tracking-wider text-white"
  >
    e-shop
  </h1>
  <NavMenuButton />
  <SearchBar />
  {#each quickLinks as link (link.id)}
    <StatefulLink {...link} />
  {/each}
</div>
