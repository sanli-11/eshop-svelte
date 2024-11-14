import type { linkType } from "$lib/types/link";

const pin_icon = '<i class="bi bi-geo-alt"></i>';
const pin_icon2 = '<i class="bi bi-geo-alt-fill"></i>';

const address: linkType = {
  id: "0",
  icon: pin_icon,
  hoverIcon: pin_icon2,
  label: "101 Times Square",
  link: "https://maps.google.com",
};

export default address;
