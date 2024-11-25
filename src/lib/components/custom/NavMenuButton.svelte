<script lang="ts">
  import { Button, buttonVariants } from "$lib/components/ui/button/index.js";

  // TODO: Show overlay when clicked with nav links, stateful links and search bar
  // TODO: Hide overlay when clicked again
</script>

<Button
  type="button"
  class={`${buttonVariants({ variant: "secondary", size: "default" })} text-black lg:hidden`}
>
  <i class="bi bi-list text-lg"> </i>
  <span class="font-semibold">Menu</span>
</Button>
