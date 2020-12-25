/* If strict mode is true in tsconfig, you will have to ensure that dom
elements exist before using any of their methods */

const button = document.querySelector('button');

if (button) {
  // without if statement, error - object could possibly be null
  button.addEventListener('click', () => console.log('click'));
}

// The above if check can be simplified using a ?

button?.addEventListener('click', () => console.log('click'));

/* if you know for sure an element exists, you could put a ! after selecting
it, or a ? before calling a method on the variable. */

const button2 = document.querySelector('button')!;

/* When selecting an element by class name, typescript won't know what type of
element is being selected. This is when type casting comes in handy. Type
casting specifies the type of html element and eliminates the need for ! */

const button3 = document.querySelector('.button') as HTMLButtonElement;
button3.addEventListener('click', (e) => {
  e.preventDefault();
});
