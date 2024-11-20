import type { categoryType } from "./category";
import type { linkType } from "./link";

type popupLinkType = linkType & {
  popupContent: categoryType[];
};

export type { popupLinkType };

