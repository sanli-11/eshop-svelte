import type { linkDataType } from "$lib/types/data";
import { locationSearch } from "$lib/utils/locationSearchHandler";
import { numberCleaner } from "$lib/utils/numberCleaner";

const locationData: linkDataType = {
  text: "101 Times Square",
  get link() {
    return locationSearch(this.text);
  },
};

const phoneData: linkDataType = {
  text: "+1 (123) 456 7890",
  get link() {
    return "tel:" + numberCleaner(this.text);
  },
};

export { locationData, phoneData };
