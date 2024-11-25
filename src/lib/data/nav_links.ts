import { icons } from "$lib/constants/icon";
import { navLinkData } from "$lib/constants/nav_link";
import type { linkDataType } from "$lib/types/data";
import type { linkType } from "$lib/types/link";
import { getIconHandler } from "$lib/utils/iconHandler";
import { v4 as uuid } from "uuid";

const navIcons: string[][] = [];

// each line pushes [default, hover]
navIcons.push(Object.values(icons.list));
navIcons.push(Object.values(icons.grid));
navIcons.push(Object.values(icons.journal));
navIcons.push(Object.values(icons.contact));
navIcons.push(Object.values(icons.star));
navIcons.push(Object.values(icons.heart));
navIcons.push(Object.values(icons.gift));

const navLinks1: linkType[] = [];
const navLinks2: linkType[] = [];

navLinkData.forEach((data: linkDataType, i: number) => {
  // 4 items in left navigation menu
  // 3 items in right navigation menu
  if (i <= 3) {
    navLinks1.push({
      id: uuid(),
      icon: getIconHandler(navIcons[i]),
      label: data.text,
      link: data.link,
    });
  } else {
    navLinks2.push({
      id: uuid(),
      icon: getIconHandler(navIcons[i]),
      label: data.text,
      link: data.link,
    });
  }
});

export { navLinks1, navLinks2 };
