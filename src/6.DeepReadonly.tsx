export type Readonly<T> = {
  readonly [P in keyof T]: T[P];
}

export type DeepReadonly<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
}

declare const person: DeepReadonly<{
  name: string;
  address: {
    city: string;
  };
  numbers: number[];
}>;

// person.name = 'b';
// person.address = { city: 'Warsaw' };
// person.address.city = 'a';
// // TS 3.4 required
// // Property 'push' does not exist on type 'readonly number[]'.ts(2339)
// person.numbers.push(5);