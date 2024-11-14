<script lang="ts">
  import languages from "$lib/data/languages";

  let flag = $state(languages[0].flag);
  let selected = $state(languages[0].language);

  let handleChange = (e: Event) => {
    let selectedLanguage = languages.find(
      (lang) => lang.language === (e.target as HTMLSelectElement).value,
    );

    flag = selectedLanguage!.flag;
  };
</script>

<div class="flex gap-x-1.5 lg:gap-x-2.5">
  {@html flag}
  <select
    class="rounded-md bg-overlay py-0.5 pl-2 pr-3 lg:py-1 lg:pr-4"
    name="language"
    bind:value={selected}
    onchange={handleChange}
  >
    {#each languages as lang (lang.id)}
      <option class="bg-white" value={lang.language}>
        {lang.language}
      </option>
    {/each}
  </select>
</div>
