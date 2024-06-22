/**
  Reduce over iterator with initial value
  @returns reduced value
*/
export function reduceWithInitial<T, R>(
  iterable: Iterable<T>,
  callbackFn: (accumulator: R, currentValue: T, currentIndex: number) => R,
  initialValue: R,
): R {
  let index = 0;
  let result = initialValue;
  for (const item of iterable) {
    index += 1;
    result = callbackFn(result, item, index);
  }
  return result;
}

/**
  Reduce over iterator with default value
  @returns reduced value
*/
export function reduceWithDefault<T, D>(
  iterable: Iterable<T>,
  callbackFn: (accumulator: T, currentValue: T, currentIndex: number) => T,
  defaultValue: D,
): T | D {
  const iterator = iterable[Symbol.iterator]();

  let iterResult = iterator.next();
  if (iterResult.done) return defaultValue;

  let index = 0;
  let result: T = iterResult.value;
  iterResult = iterator.next();

  while (!iterResult.done) {
    index += 1;
    result = callbackFn(result, iterResult.value, index);
    iterResult = iterator.next();
  }

  return result;
}
