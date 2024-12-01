import { bannerData, bannerImages } from "$lib/constants/banner";
import type { bannerType } from "$lib/types/banner";
import type { textDataType } from "$lib/types/data";

let count = 0;

const banners: bannerType[] = [];

bannerData.forEach((data: textDataType, i: number) => {
  banners.push({
    id: String(count),
    title: data.title!,
    tagline: data.text,
    src: bannerImages[i].src,
    alt: bannerImages[i].alt,
  });

  count++;
});

export default banners;
