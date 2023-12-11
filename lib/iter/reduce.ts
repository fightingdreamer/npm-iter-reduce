/**
  Reduce over iterator with initial value
  @returns reduced value
*/
export function reduceWithInitial<T, R>(
  iterator: Iterable<T>,
  callbackFn: (accumulator: R, currentValue: T, currentIndex: number) => R,
  initialValue: R,
): R {
  let result = initialValue;
  let index = 0;
  for (const item of iterator) {
    result = callbackFn(result, item, index);
    index += 1;
  }
  return result;
}

/**
  Reduce over iterator with default value
  @returns reduced value
*/
export function reduceWithDefault<T>(
  iterator: Iterable<T>,
  callbackFn: (accumulator: T, currentValue: T, currentIndex: number) => T,
  defaultValue: T,
): T {
  let result = null;
  let index = 0;
  for (const item of iterator) {
    result = result == null ? item : callbackFn(result, item, index);
    index += 1;
  }
  return result ?? defaultValue;
}
