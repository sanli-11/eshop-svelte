import type { linkType } from "$lib/types/link";

const facebook_icon = '<i class="bi bi-facebook"></i>';
const twitter_icon = '<i class="bi bi-twitter"></i>';
const instagram_icon = '<i class="bi bi-instagram"></i>';

const facebook_page = "https://facebook.com/eshop";
const twitter_page = "https://x.com/eshop";
const instagram_page = "https://instagram.com/eshop";

const socialLinks: linkType[] = [
  {
    id: "0",
    icon: facebook_icon,
    label: "Facebook",
    link: facebook_page,
  },
  {
    id: "1",
    icon: twitter_icon,
    label: "Twitter",
    link: twitter_page,
  },
  {
    id: "2",
    icon: instagram_icon,
    label: "Instagram",
    link: instagram_page,
  },
];

export default socialLinks;
