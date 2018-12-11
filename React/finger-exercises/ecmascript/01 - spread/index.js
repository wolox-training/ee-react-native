import { isArray } from './utils';

export function min(...array) {
  if (isArray(array)) {
    return Math.min(...array);
  }
  return undefined;
}

export function copy() {

}
