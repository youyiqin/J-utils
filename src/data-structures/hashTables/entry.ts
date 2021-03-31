export interface Hashable {
  hashCode(): number;
}

export class Entry<K extends Hashable, V> {
  hash: number;

  constructor(public key: K, public value: V) {
    this.hash = key.hashCode();
  }
}
