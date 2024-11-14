import type { linkType } from "$lib/types/link";

const telephone_icon = '<i class="bi bi-telephone"></i>';
const telephone_icon2 = '<i class="bi bi-telephone-fill"></i>';

const phone: linkType = {
  id: "1",
  icon: telephone_icon,
  hoverIcon: telephone_icon2,
  label: "+1 (123) 456 7890",
  link: "tel:+11234567890",
};

export default phone;
