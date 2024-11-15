import type { linkType } from "$lib/types/link";

const bootstrap_icon = "bi";
const facebook_icon = "bi-facebook";
const twitter_icon = "bi-twitter";
const instagram_icon = "bi-instagram";

const facebook_page = "https://facebook.com/eshop";
const twitter_page = "https://x.com/eshop";
const instagram_page = "https://instagram.com/eshop";

const socialLinks: linkType[] = [
  {
    id: "0",
    iconPack: bootstrap_icon,
    icon: facebook_icon,
    label: "Facebook",
    link: facebook_page,
  },
  {
    id: "1",
    iconPack: bootstrap_icon,
    icon: twitter_icon,
    label: "Twitter",
    link: twitter_page,
  },
  {
    id: "2",
    iconPack: bootstrap_icon,
    icon: instagram_icon,
    label: "Instagram",
    link: instagram_page,
  },
];

export default socialLinks;
