/* If strict mode is true in tsconfig, you will have to ensure that dom
elements exist before using any of their methods */

const button = document.querySelector('button');

if (button) {
  // without if statement, error - object could possibly be null
  button.addEventListener('click', () => console.log('click'));
}

/* if you know for sure an element exists, you could put a ! after selecting
it, or a ? before calling a method on the variable. */

// Ex: const button = document.querySelector('button')!;
// Or Ex: button?.addEventListener('click', () => console.log('click'));
