import { icons } from "$lib/constants/icon";
import { socialData } from "$lib/constants/social_link";
import type { linkDataType } from "$lib/types/data";
import type { linkType } from "$lib/types/link";
import { getIconHandler } from "$lib/utils/iconHandler";
import { v4 as uuid } from "uuid";

const socialIcons: string[][] = [];

// each line pushes [default, hover]
socialIcons.push(Object.values(icons.facebook));
socialIcons.push(Object.values(icons.twitter));
socialIcons.push(Object.values(icons.instagram));

const socialLinks: linkType[] = [];

socialData.forEach((data: linkDataType, i: number) => {
  socialLinks.push({
    id: uuid(),
    icon: getIconHandler(socialIcons[i]),
    label: data.text,
    link: data.link,
  });
});

export default socialLinks;
