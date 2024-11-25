import type { linkDataType } from "$lib/types/data";

const quickLinkData: linkDataType[] = [
  { text: "Cart", link: "/cart" },
  { text: "Account", link: "/account" },
];

const navLinkData: linkDataType[] = [
  { text: "Categories", link: "/categories" },
  { text: "Products", link: "/products" },
  { text: "Blogs", link: "/blogs" },
  { text: "Contact", link: "/contact" },
  { text: "Limited Sale", link: "/limited" },
  { text: "Best Seller", link: "/best" },
  { text: "New Arrival", link: "/new" },
];

export { navLinkData, quickLinkData };
