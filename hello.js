const greet = (name) => {
  if (typeof name !== 'string' || name.trim() === '') {
    return 'Hello, Guest!';
  }
  return `Hello, ${name}!`;
};

console.log(greet('Copilot'));

// adds two numbers with basic validation
const add = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number' || Number.isNaN(a) || Number.isNaN(b)) {
    throw new TypeError('add: both arguments must be valid numbers');
  }
  return a + b;
};

console.log(add(2, 3));


