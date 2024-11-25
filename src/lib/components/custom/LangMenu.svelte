<script lang="ts">
  import * as Select from "$lib/components/ui/select/index";
  import languages from "$lib/data/languages";
  import type { localeType } from "$lib/types/locale";

  let selectedLang: localeType = $state(languages[0]);

  // TODO: Fix
  // value should be something like this, without having to reference a closure:
  // let value: string = $state(selectedLang.language);
  let value: string = $state(languages[0].label);

  let onValueChange = (val: string) => {
    let findLang = languages.find((lang) => lang.label === val);

    if (typeof findLang !== "undefined") {
      selectedLang = findLang;
    }

    value = selectedLang.label;

    // TODO: Add logic to change language across app
    // TODO: Store last language selected into local storage and account for use on revisit
    // TODO: Load language selected from last visit and change language
  };
</script>

<div class="flex gap-x-2 lg:gap-x-2.5">
  <i class={selectedLang.icon.normal}></i>
  <Select.Root type="single" name="language" bind:value {onValueChange}>
    <Select.Trigger class="h-6 w-24 lg:h-8 lg:w-28">
      {value}
    </Select.Trigger>
    <Select.Content>
      {#each languages as lang (lang.id)}
        <Select.Item value={lang.label}>
          {lang.label}
        </Select.Item>
      {/each}
    </Select.Content>
  </Select.Root>
</div>
