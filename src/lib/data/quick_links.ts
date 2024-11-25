import { icons } from "$lib/constants/icon";
import { quickLinkData } from "$lib/constants/nav_link";
import type { linkDataType } from "$lib/types/data";
import type { linkType } from "$lib/types/link";
import { getIconHandler } from "$lib/utils/iconHandler";
import { v4 as uuid } from "uuid";

let linkIcons: string[][] = [];

// each line pushes [default, hover]
linkIcons.push(Object.values(icons.cart));
linkIcons.push(Object.values(icons.account));

const quickLinks: linkType[] = [];

quickLinkData.forEach((data: linkDataType, i: number) => {
  quickLinks.push({
    id: uuid(),
    icon: getIconHandler(linkIcons[i]),
    label: data.text,
    link: data.link,
  });
});

export default quickLinks;
