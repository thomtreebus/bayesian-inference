import {
  complement,
  curryN,
  flip,
  includes,
  is,
  isEmpty,
  isNil,
  pipe,
  prop,
} from "ramda";

export const isNotNil = complement(isNil);
export const isNotEmpty = complement(isEmpty);
export const includesFlipped = curryN(2, flip(includes));
export const isString = is(String);
export const isNumber = is(Number);
export const isObject = is(Object);
export const isNotString = complement(isString);
export const isNotNumber = complement(isNumber);
export const isNotObject = complement(isObject);

export const propIsNotNil: (propName: string, obj: object) => boolean = pipe(
  prop,
  isNotNil
);
