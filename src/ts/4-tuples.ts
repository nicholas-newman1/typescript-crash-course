/* Tuples are an array with fixed length of 2. Without explicity specifying the type, TypeScript will assume it is of type Array*/
let coordinate: [number, number];

// coordinate = [] // ERROR
// coordinate = [1, 2, 3] // ERROR
coordinate = [1, 1];

/* Note the push method is an unexpected exception */
coordinate.push(3);
