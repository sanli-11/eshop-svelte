import { icons } from "$lib/constants/icon";
import { languageData } from "$lib/constants/langague";
import type { textDataType } from "$lib/types/data";
import type { localeType } from "$lib/types/locale";
import { getIconHandler } from "$lib/utils/iconHandler";
import { v4 as uuid } from "uuid";

let flagIcons: string[][] = [];

// each line pushes [languageName]
flagIcons.push([icons.flags.english]);
flagIcons.push([icons.flags.urdu]);
flagIcons.push([icons.flags.farsi]);

const languages: localeType[] = [];

languageData.forEach((data: textDataType, i: number) => {
  languages.push({
    id: uuid(),
    icon: getIconHandler(flagIcons[i]),
    label: data.text,
  });
});

export default languages;
