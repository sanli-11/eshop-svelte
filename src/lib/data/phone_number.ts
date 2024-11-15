import type { linkType } from "$lib/types/link";

const bootstrap_icon = "bi";
const telephone_icon = "bi-telephone";
const telephone_icon_fill = "bi-telephone-fill";

const phone_number = "+1 (123) 456 7890";
let phone_number_cleaned = phone_number.replace(/\s+/g, "");
phone_number_cleaned = phone_number_cleaned.replace(/[()]/g, "");

const phone: linkType = {
  id: "1",
  isHovered: false,
  iconPack: bootstrap_icon,
  icon: telephone_icon,
  altIcon: telephone_icon_fill,
  label: phone_number,
  link: `tel:${phone_number_cleaned}`,
};

export default phone;
