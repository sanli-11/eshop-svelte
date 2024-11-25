type numberCleanerType = (number: string) => string;

/**
 * EXAMPLE
 * @param number = "+1 (123) 456 7890"
 * @returns +1123456789
 */
const numberCleaner: numberCleanerType = (number) => {
  // remove spaces
  let cleaned = number.replace(/\s+/g, "");
  //remove parenthesis
  cleaned = cleaned.replace(/[()]/g, "");

  return cleaned;
};

export { numberCleaner };
