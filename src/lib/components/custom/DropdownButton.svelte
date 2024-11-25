<script lang="ts">
  import { buttonVariants } from "$lib/components/ui/button/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import type { categoryType } from "$lib/types/category";
  import type { linkType } from "$lib/types/link";

  const {
    dropdownItems,
    id,
    icon,
    label,
    link,
  }: { dropdownItems: categoryType[] } & linkType = $props();

  let open = $state(false);
  let onOpenChange = () => {
    open = !open;

    getIcon();
  };

  let shownIcon = $state(icon!.normal);

  let getIcon = () => {
    if (typeof icon !== "undefined" && Object.hasOwn(icon, "hover"))
      shownIcon = open ? icon!.hover! : icon!.normal;
  };
</script>

<DropdownMenu.Root {open} {onOpenChange}>
  <DropdownMenu.Trigger
    class={`${buttonVariants({ variant: "ghost" })} flex gap-x-4 transition-all hover:font-semibold hover:text-main ${open ? "bg-accent font-semibold text-main" : "bg-main text-white"}`}
  >
    {#if typeof icon !== "undefined"}
      <i class={shownIcon}></i>
    {/if}
    {label}
  </DropdownMenu.Trigger>
  <DropdownMenu.Content class="w-60">
    {#each dropdownItems as section (section.id)}
      <DropdownMenu.Group>
        <DropdownMenu.GroupHeading class="pointer-events-none mt-2.5">
          {section.heading}
        </DropdownMenu.GroupHeading>
        <DropdownMenu.Separator></DropdownMenu.Separator>
        {#each section.content as item (item.id)}
          <DropdownMenu.Item class="px-4">
            <a href={link}>
              {item.label}
            </a>
          </DropdownMenu.Item>
        {/each}
      </DropdownMenu.Group>
    {/each}
  </DropdownMenu.Content>
</DropdownMenu.Root>
