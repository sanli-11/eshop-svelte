import type { imageDataType, textDataType } from "$lib/types/data";
import banner1 from "/src/assets/images/banner-1.png";
import banner2 from "/src/assets/images/banner-2.png";

const bannerData: textDataType[] = [
  {
    title: "Your One-Stop Electronic Market",
    text: "Welcome to e-shop, a place where you can buy everything about electronics. Sale every day!",
  },
  {
    title: "Elevate Your Tech Gadget Game",
    text: "Shop the latest technology available here in e-shop. Sale & discount offers everyday.",
  },
];

const bannerImages: imageDataType[] = [
  { src: banner1, alt: "Samsung S24 Ultra" },
  { src: banner2, alt: "iPhone 16" },
];

export { bannerData, bannerImages };
