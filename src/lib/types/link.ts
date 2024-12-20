import type { iconType } from "$lib/types/icon";

type linkType = {
  id: string;
  icon?: iconType;
  label: string;
  link: string;
};

export type { linkType };
