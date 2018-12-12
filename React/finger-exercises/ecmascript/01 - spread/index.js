import { isArray } from './utils';

export function min(...args) {
  if (args.length === 0) {
    return undefined;
  }
  let spread = [];
  args.forEach(pos => {
    if (isArray(pos)) {
      spread = [...spread, ...pos];
    } else {
      spread.push(pos);
    }
  });
  return Math.min(...spread);
}

export function copy(element) {
  /*
  if (isArray(element)) {
    return [...element];
  }
  const { ...copied } = element;
  return copied;
  */
  return isArray(element) ? [...element] : { ...element };
}

export function reverseMerge(array1, array2) {
  return [...array2, ...array1];
}

export function filterAttribs(object) {
  const { a, b, ...filtered } = object;
  return filtered;

}
