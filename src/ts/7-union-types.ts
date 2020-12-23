/* Suppose we need a function that will combine two values. It accepts only
numbers or strings. If the values are numbers, return their sum. If the values
are strings, return them concatenated. */

/* This is a situation where union types are needed. A union type can be set by
using the pipe | between types. */
function combine(val1: number | string, val2: number | string) {
  let result: number | string;
  if (typeof val1 === 'number' && typeof val2 === 'number') {
    result = val1 + val2;
  } else {
    result = val1.toString() + val2.toString();
  }
  return result;
}
