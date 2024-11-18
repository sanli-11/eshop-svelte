<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import * as Select from "$lib/components/ui/select/index.js";
  import categories from "$lib/data/categories";

  let initialValue = "All Categories";

  let value: string = $state(initialValue);

  let onValueChange = (val: string) => {
    let findCategory = categories.find((cat) => cat.label === val);

    if (typeof findCategory !== "undefined") {
      value = findCategory.label;

      return;
    }

    value = initialValue;
  };
</script>

<div class="hidden w-full gap-0 lg:flex">
  <Select.Root type="single" name="categories" bind:value {onValueChange}>
    <Select.Trigger
      class="w-56 rounded-l-md rounded-r-none text-xs font-semibold lg:pl-4 lg:text-sm"
    >
      {value}
    </Select.Trigger>
    <Select.Content>
      {#each categories as category (category.id)}
        <Select.Item value={category.label}>
          {category.label}
        </Select.Item>
      {/each}
    </Select.Content>
  </Select.Root>
  <Input
    class="w-full rounded-none px-4 placeholder:text-xs placeholder:italic lg:placeholder:text-sm"
    placeholder="Search Product..."
  />
  <Button type="button" class="rounded-l-none">
    <i class="bi bi-search">
      <span class="hidden font-semibold not-italic text-white"> Search </span>
    </i>
  </Button>
</div>
