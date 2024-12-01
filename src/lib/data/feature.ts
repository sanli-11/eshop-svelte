import featureData from "$lib/constants/feature";
import type { textDataType } from "$lib/types/data";
import type { featureType } from "$lib/types/feature";
import { v4 as uuid } from "uuid";

// TODO: use lucide-svelte to make an array containing icons

const features: featureType[] = [];

featureData.forEach((data: textDataType) => {
  features.push({
    id: uuid(),
    title: data.title!,
    description: data.text,
  });
});

export default features;
