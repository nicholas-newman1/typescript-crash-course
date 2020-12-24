/* The unknown type can be used when the type of value that will be stored in a
variable is unknown (ex. fetch from api, user input, etc). A variable with the
type unknown acts very simlar to the any type. However, unlike a variable with
type any, a variable of type unknown cannot be assigned to a another, typed,
variable without first checking the type. */

/* It is better to use unknown than to use any since there is still some type
checking. However it is better to be more specific if possible. */

let userInput: unknown;
userInput = 123;
userInput = 'jake123';

let userName: string;
// userName = userInput // error, userInput is of type unknown

if (typeof userInput === 'string') {
  // typescript recognizes that userInput must be of type string
  userName = userInput;
}
