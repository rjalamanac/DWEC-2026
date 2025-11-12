function withLogging(fn) {
  return function (...args) {
    console.log(`Calling with: ${args}`);
    const result = fn(...args);
    console.log(`Result: ${result}`);
    return result;
  };
}

class treeDecotor {
  constructor(...args) {
    arrayFunction = args.toArray();
  }
  decorate() {
    for (element of arrayFunction) {
      element.decorate();
    }
  }
}
