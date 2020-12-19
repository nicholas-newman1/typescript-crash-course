/* Core Types

- number (integers and floats/doubles)
- string
- boolean (true/false only, no truthy/falsy values)
- object (more specific types of object are possible)
- Array (element types can be flexible or strict)

*/

// define a type with ': type' after variable name

/* No need to define type when declaring and assigning value to a variable.
TypeScript will infer the type based on the value being assigned. If you don't
assign a value immediately after declaration, then it is a good idea to specify
its type */
let num1 = 1; // number
let num2 = 2; // number
let printResult = false; // boolean

/* The following function will not accept any other type than number as a
parameter. Any attempt to pass another type will display an error. */
function add(n1: number, n2: number) {
  /* The following if statement could be used to check for types in vanilla JS,
  but this will throw an error at runtime instead of during development. It is
  better to catch the error earlier. Also, vanilla JS cannot check for all the
  types that TypeScript can check for */
  if (typeof n1 !== 'number' && typeof n2 !== 'number') {
    throw new Error('Parameters must be of type number');
  }

  return n1 + n2;
}

if (printResult) console.log(add(num1, num2));
