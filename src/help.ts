export const isNumber = (str: string) => /\d/.test(str);
export const isLetter = (str: string) => /[a-z]/.test(str);
export const defaultEquals = (a: number | string, b: number | string) => {
  return a === b;
};

export const defaultToString = (item: any): string => {
  if (item === null) {
    return "NULL";
  }
  if (item === undefined) {
    return "UNDEFINED";
  }
  if (typeof item === "string" || item instanceof String) {
    return `${item}`;
  }
  const res: string = item.toString();
  return res;
};
