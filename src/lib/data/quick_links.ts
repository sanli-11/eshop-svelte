import type { linkType } from "$lib/types/link";

const bootstrap_icon = "bi";
const cart_icon = "bi-cart";
const account_icon = "bi-person";

const quickLinks: linkType[] = [
  {
    id: "0",
    iconPack: bootstrap_icon,
    icon: cart_icon,
    label: "Cart",
    link: "/cart",
  },
  {
    id: "1",
    iconPack: bootstrap_icon,
    icon: account_icon,
    label: "Account",
    link: "/account",
  },
];

export default quickLinks;
