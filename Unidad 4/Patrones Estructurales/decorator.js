function withLogging(fn) {
  return function (...args) {
    console.log(`Calling with: ${args}`);
    const result = fn(...args);
    console.log(`Result: ${result}`);
    return result;
  };
}

const sum = (a, b) => a + b;
const loggedSum = withLogging(sum);
loggedSum(3, 4);
