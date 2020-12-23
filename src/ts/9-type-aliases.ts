/* If you use the same union type over and over it may be more efficient to set a type alias. */
type Combineable = number | string;

function combine3(val1: Combineable, val2: Combineable) {
  let result: Combineable;
  if (typeof val1 === 'number' && typeof val2 === 'number') {
    result = val1 + val2;
  } else {
    result = val1.toString() + val2.toString();
  }
  return result;
}
