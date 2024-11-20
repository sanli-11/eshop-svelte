<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Command from "$lib/components/ui/command/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import * as Popover from "$lib/components/ui/popover/index.js";
  import categories from "$lib/data/categories";
  import type { categoryType } from "$lib/types/category";
  import type { linkType } from "$lib/types/link";
  import { cn } from "$lib/utils.js";
  import Check from "lucide-svelte/icons/check";
  import ChevronDown from "lucide-svelte/icons/chevron-down";
  import { tick } from "svelte";

  // TODO: Logic for Search
  // TODO: Logic for Filtering categories
  // TODO: Logic for clearing filter
  // TODO: Adding dropdown matching items
  //TODO: Adding clear button for input

  let categoryHeading: categoryType | undefined;
  let categoryContent: linkType | undefined;

  let open: boolean = $state(false);
  let value: string = $state("");
  let triggerRef = $state<HTMLButtonElement>(null!);

  let selectedValue = $derived.by(() => {
    if (value === "") return;

    categoryHeading = categories.find((cat) => {
      categoryContent = cat.content.find((item) => item.label === value);

      return categoryContent;
    });

    return categoryContent!.label;
  });

  let closeAndFocusTrigger = () => {
    open = false;

    tick().then(() => triggerRef.focus());
  };

  let handleSearch = (e: SubmitEvent) => {
    e.preventDefault();
  };
</script>

<form onsubmit={handleSearch} class="hidden w-full gap-0 lg:flex">
  <Popover.Root bind:open>
    <Popover.Trigger bind:ref={triggerRef}>
      {#snippet child({ props })}
        <Button
          variant="outline"
          class="w-[200px] justify-between rounded-r-none"
          {...props}
          role="combobox"
          aria-expanded={open}
        >
          {selectedValue || "All Categories"}
          <ChevronDown class="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      {/snippet}
    </Popover.Trigger>
    <Popover.Content class="w-[200px] p-0">
      <Command.Root>
        <Command.Input placeholder="All Categories" />
        <Command.List>
          <Command.Empty>No Category Found.</Command.Empty>
          {#each categories as catType (catType.id)}
            <Command.Group heading={catType.heading}>
              {#each catType.content as catItem (catItem.id)}
                <Command.Item
                  value={catItem.label}
                  onSelect={() => {
                    value = catItem.label;
                    closeAndFocusTrigger();
                  }}
                >
                  <Check
                    class={cn(
                      "mr-2 size-4",
                      value !== catItem.label && "text-transparent",
                    )}
                  />
                  {catItem.label}
                </Command.Item>
              {/each}
            </Command.Group>
          {/each}
        </Command.List>
      </Command.Root>
    </Popover.Content>
  </Popover.Root>
  <Input
    class="w-full rounded-none px-4 placeholder:text-xs placeholder:italic lg:placeholder:text-sm"
    placeholder="Search Product..."
  />
  <Button type="submit" class="rounded-l-none">
    <i class="bi bi-search">
      <span class="hidden font-semibold not-italic text-white"> Search </span>
    </i>
  </Button>
</form>
