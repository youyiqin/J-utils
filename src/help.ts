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

export class ValuePair<K, V> {
  constructor(public key: K, public value: V) {}

  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}

export class ValuePairLazy<K, V> extends ValuePair<K, V> {
  constructor(public key: K, public value: V, public isDeleted = false) {
    super(key, value);
  }
}

export class MyObj {
  constructor(public el1: any, public el2: any) {}

  toString() {
    return `${this.el1.toString()}|${this.el2.toString()}`;
  }
}
