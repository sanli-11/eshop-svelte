<script lang="ts">
  import DropdownButton from "$lib/components/custom/DropdownButton.svelte";
  import LabelButton from "$lib/components/custom/LabelButton.svelte";
  import categories from "$lib/data/categories";
  import { navLinks1, navLinks2 } from "$lib/data/nav_links";
</script>

<nav
  aria-labelledby="primary-navigation"
  class="hidden items-center justify-between gap-x-12 lg:flex"
>
  <div class="item-center flex justify-start gap-x-8">
    {#each navLinks1 as navLeft (navLeft.id)}
      {#if navLeft.label === "Categories"}
        <DropdownButton dropdownItems={categories} {...navLeft} />
      {:else}
        <LabelButton {...navLeft} />
      {/if}
    {/each}
  </div>
  <div class="item-center flex justify-end gap-x-8">
    {#each navLinks2 as navRight (navRight.id)}
      <LabelButton {...navRight} />
    {/each}
  </div>
</nav>
