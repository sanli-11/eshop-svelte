import type { linkType } from "$lib/types/link";

type categoryType = {
  id: string;
  heading: string;
  content: linkType[];
};

export type { categoryType };
