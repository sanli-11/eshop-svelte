import { locationData, phoneData } from "$lib/constants/contact";
import { icons } from "$lib/constants/icon";
import type { linkDataType } from "$lib/types/data";
import type { linkType } from "$lib/types/link";
import { getIconHandler } from "$lib/utils/iconHandler";
import { v4 as uuid } from "uuid";

const contactIcons: string[][] = [];

// each line pushes [default, hover]
contactIcons.push(Object.values(icons.address));
contactIcons.push(Object.values(icons.phone));

const contactLinks: linkType[] = [];

[locationData, phoneData].forEach((data: linkDataType, i: number) => {
  contactLinks.push({
    id: uuid(),
    icon: getIconHandler(contactIcons[i]),
    label: data.text,
    link: data.link,
  });
});

export default contactLinks;
