function add(a, b) {
  const result = a + b;
  console.log(`${a} + ${b} = ${result}`);
}

function subtract(a, b) {
  const result = a - b;
  console.log(`${a} - ${b} = ${result}`);
}

const multiply = (a, b) => {
  const result = a * b;
  console.log(`${a} * ${b} = ${result}`);
};

const divide = (a, b) => {
  const result = a / b;
  console.log(`${a} / ${b} = ${result}`);
};

add(15, 48);
subtract(98, 4);
multiply(54, 30);
divide(88, 6);

console.log(0.1 * 0.2);
