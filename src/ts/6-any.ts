/* The any type allows any type to be passed into a variable (duhhh). You want
to avoid using any whenever possible since it eliminates the advantages of
defining types */

/* A potential use case for any is when you really can't know what type of data
will be stored in said variable. */

let value: any = 1;
value = 'hello';
value = false;
value = [1, '2', true, { num: 1 }];
