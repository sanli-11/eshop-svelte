<script lang="ts">
  import HeaderRow1 from "$lib/components/svelte/HeaderRow1.svelte";
  import HeaderRow2 from "$lib/components/svelte/HeaderRow2.svelte";
  import HeaderRow3 from "$lib/components/svelte/HeaderRow3.svelte";
</script>

<header
  class="container flex flex-col gap-y-6 rounded-b-xl bg-main p-8 lg:gap-y-4 lg:rounded-none lg:px-12 lg:py-4"
>
  <HeaderRow1 />
  <HeaderRow2 />
  <HeaderRow3 />
</header>
