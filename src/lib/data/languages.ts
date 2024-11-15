import type { langOption } from "$lib/types/langOption";

const flag_icon = "fi fis";
const uk_flag = "fi-gb";
const pk_flag = "fi-pk";

const languages: langOption[] = [
  {
    id: "1",
    iconPack: flag_icon,
    flag: uk_flag,
    language: "English",
  },
  {
    id: "0",
    iconPack: flag_icon,
    flag: pk_flag,
    language: "Urdu",
  },
];

export default languages;
