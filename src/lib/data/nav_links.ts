import type { linkType } from "$lib/types/link";
import type { popupLinkType } from "$lib/types/popupLink";
import categories from "./categories";

const bootstrap_icon = "bi";
const menu_icon = "bi-list";
const close_icon = "bi-x-lg";
const star_icon = "bi-star";
const star_icon_fill = "bi-star-fill";
const heart_icon = "bi-heart";
const heart_icon_fill = "bi-heart-fill";
const gift_icon = "bi-gift";
const gift_icon_fill = "bi-gift-fill";

const navLinks: (popupLinkType | linkType)[][] = [
  [
    {
      id: "0",
      isHovered: false,
      iconPack: bootstrap_icon,
      icon: menu_icon,
      altIcon: close_icon,
      label: "Categories",
      link: "/categories",
      popupContent: categories,
    },
    {
      id: "1",
      label: "Products",
      link: "/products",
    },
    {
      id: "2",
      label: "Blogs",
      link: "/blogs",
    },
    {
      id: "3",
      label: "Contact",
      link: "/contact",
    },
  ],
  [
    {
      id: "0",
      iconPack: bootstrap_icon,
      icon: star_icon,
      altIcon: star_icon_fill,
      label: "Limited Sales",
      link: "/limited",
    },
    {
      id: "1",
      iconPack: bootstrap_icon,
      icon: heart_icon,
      altIcon: heart_icon_fill,
      label: "Best Sellers",
      link: "/best",
    },
    {
      id: "2",
      iconPack: bootstrap_icon,
      icon: gift_icon,
      altIcon: gift_icon_fill,
      label: "Blogs",
      link: "/blogs",
    },
  ],
];

export default navLinks;
