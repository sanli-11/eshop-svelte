import { bootstrap, flag } from "$lib/constants/icon";

type iconObject = {
  normal: string;
  hover?: string;
};

type iconHandlerType = (normal: string, hover?: string) => iconObject;
type getIconHandlerType = (iconObject: string[]) => iconObject;

/**
 * EXAMPLE
 * @param normal = "bi-star"
 * @returns { normal: "bi bi-star" }
 * OR
 * @param normal = "bi-star"
 * @param hover = "bi-star-fill"
 * @returns { normal: "bi bi-star", hover: "bi bi-star-filled" }
 */
const iconHandler: iconHandlerType = (normal, hover?) => {
  let pack;

  if (normal.startsWith("bi")) pack = bootstrap;
  if (normal.startsWith("fi")) pack = flag;

  if (typeof hover !== "undefined")
    return { normal: pack + normal, hover: pack + hover };
  else return { normal: pack + normal };
};

/**
 * EXAMPLE
 * @param iconObject = ["bi-star"]
 * @returns { normal: "bi bi-star" }
 * OR
 * @param iconObject = ["bi-star", "bi-star-filled"]
 * @returns { normal: "bi bi-star", hover: "bi bi-star-filled" }
 */
const getIconHandler: getIconHandlerType = (iconObject) => {
  // 0: default & 1: hover
  if (iconObject.length > 1) return iconHandler(iconObject[0], iconObject[1]);
  else return iconHandler(iconObject[0]);
};

export { getIconHandler };
