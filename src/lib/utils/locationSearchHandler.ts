type locationSearchHandlerType = (name: string) => string;

/**
 * EXAMPLE
 * @param name = "White House"
 * @returns "https///maps.google.com/?q=White+House"
 */
const locationSearch: locationSearchHandlerType = (name) => {
  let gMaps = "https://maps.google.com/?q=";
  return gMaps + name;
};

export { locationSearch };
