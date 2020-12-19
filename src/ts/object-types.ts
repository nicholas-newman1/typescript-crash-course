/* TypeScript infers the object type { name: string; age: number; }. Cannot add
additional properties because they don't exist on the object type */
const person = {
  name: 'Nick',
  age: 20,
};

/* Explicit declaration of object type. This is an anti-pattern. */
const person2: {
  name: string;
  age: number;
} = {
  name: 'John',
  age: 30,
};
