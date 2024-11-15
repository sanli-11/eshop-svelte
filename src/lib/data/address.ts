import type { linkType } from "$lib/types/link";

const bootstrap_icon = "bi";
const pin_icon = "bi-geo-alt";
const pin_icon_fill = "bi-geo-alt-fill";

const location = "101 Times Square";
const link_to_location = "https://maps.google.com";

const address: linkType = {
  id: "0",
  isHovered: false,
  iconPack: bootstrap_icon,
  icon: pin_icon,
  altIcon: pin_icon_fill,
  label: location,
  link: link_to_location,
};

export default address;
