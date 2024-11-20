<script lang="ts">
  import { buttonVariants } from "$lib/components/ui/button/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import navLinks from "$lib/data/nav_links";
  import type { popupLinkType } from "$lib/types/popupLink";
  import Button from "../ui/button/button.svelte";

  let open = $state(false);

  let onOpenChange = () => (open = !open);
</script>

<nav class="flex items-center justify-between gap-x-12">
  {#each navLinks as navSection}
    <div class="flex items-center justify-between gap-x-6">
      {#each navSection as navItem (navItem.id)}
        {#if Object.hasOwn(navItem, "popupContent")}
          <DropdownMenu.Root {open} {onOpenChange}>
            <DropdownMenu.Trigger
              class={`${buttonVariants({ variant: "ghost" })} } flex justify-start gap-x-4 text-white transition-all hover:bg-main hover:text-white hover:ring-1 hover:ring-white`}
            >
              {#if navItem.iconPack}
                <i
                  class={`${navItem.iconPack} ${!open ? navItem.icon : navItem.altIcon}`}
                ></i>
              {/if}
              {navItem.label}
            </DropdownMenu.Trigger>
            <DropdownMenu.Content class="w-[50rem]">
              {#each (navItem as popupLinkType).popupContent as popupSection (popupSection.id)}
                <DropdownMenu.Group>
                  <DropdownMenu.GroupHeading>
                    {popupSection.heading}
                  </DropdownMenu.GroupHeading>
                  <DropdownMenu.Separator></DropdownMenu.Separator>
                  {#each popupSection.content as popupItem (popupItem.id)}
                    <DropdownMenu.Item>
                      {popupItem.label}
                    </DropdownMenu.Item>
                  {/each}
                </DropdownMenu.Group>
              {/each}
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        {:else}
          <Button
            href={navItem.link}
            class={` ${buttonVariants({ variant: "ghost" })} group bg-main text-white hover:bg-main hover:text-white hover:ring-1 hover:ring-white `}
          >
            {#if Object.hasOwn(navItem, "iconPack")}
              <i class={`${navItem.iconPack} ${navItem.icon}`}></i>
            {/if}
            {navItem.label}
          </Button>
        {/if}
      {/each}
    </div>
  {/each}
</nav>
