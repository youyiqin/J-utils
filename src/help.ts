export const isNumber = (str: string) => /\d/.test(str);
export const isLetter = (str: string) => /[a-z]/.test(str);
export const defaultEquals = (a: number | string, b: number | string) => {
  return a === b;
};
