/* You can set the return type of a function, but you should let TypeScript
infer it, unless you have a good reason not to. If a function returns nothing,
it is infered that the return type is void. */

// inferred return type: void
function printName(name: string) {
  console.log(name);
}

// inferred return type: number
function subtract(num1: number, num2: number) {
  return num1 - num2;
}

// explicit return type: number
function multiply(num1: number, num2: number): number {
  return num1 * num2;
}

/* We can set the type of a variable to Function. However, this tells us
nothing about the parameters of the function. In this case, function types
come in handy */

/* Function types allow us to specify what type of function (# of parameters,
parameter types, return type) should be stored in a variable */

let divide: (a: number, b: number) => void;

divide = function (num1: number, num2: number) {
  return num1 / num2;
};

let log = (msg: any) => {
  console.log(msg);
};

// Callback function
let divideAndHandle = (num1: number, num2: number, cb: (msg: any) => void) => {
  cb(divide(num1, num2));
};

// divideAndHandle(10, 2, log);
