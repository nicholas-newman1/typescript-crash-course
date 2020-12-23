/* Suppose we want to have a parameter that accepts only certain values. This
is when literal types come in handy. In this example, they help to avoid a
mispelt third parameter which could be the source of a not so obvious bug.
You will often find yourself using literal types with union types because one
literal value alone could just be stored as a constant. */
function combine2(
  val1: number | string,
  val2: number | string,
  returnType: 'string' | 'num'
) {
  let result: number | string;
  if (typeof val1 === 'number' && typeof val2 === 'number') {
    result = val1 + val2;
  } else {
    result = val1.toString() + val2.toString();
  }

  return returnType === 'string' ? result.toString() : +result;
}

// console.log(combine2(1, 2, 'string'));
