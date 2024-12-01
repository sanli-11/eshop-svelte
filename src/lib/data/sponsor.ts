import sponsorData from "$lib/constants/sponsor";
import type { imageDataType } from "$lib/types/data";
import type { sponsorType } from "$lib/types/sponsor";

let count = 0;

const sponsors: sponsorType[] = [];

sponsorData.forEach((data: imageDataType) => {
  sponsors.push({
    id: String(count),
    src: data.src,
    alt: data.alt,
  });

  count++;
});

export default sponsors;
