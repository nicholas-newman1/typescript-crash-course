/* TypeScript infers hobbies is of type string[], an array of strings. */
const hobbies = ['Sports', 'Cookies'];

/* The inference of type string[] on hobbies allows us to perform actions
on it with certainty of its type. */
const hobbiesUC = hobbies.map((hobby) => {
  // hobby.forEach(x => console.log(x)) // ERROR: hobby is of type string
  return hobby.toUpperCase();
});

/* If we are not assigning a value immediately, it is a good idea to specify
the type */
let data: string[];

/* If we want to allow for any type in an array we can use the type any[].
Note: any should only be used when necessay, as it takes away the benefits
of specifying types */
let data2: any[];
data2 = [1, '2', true];
