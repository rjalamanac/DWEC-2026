const user = { name: "Rafa", age: 30 };

const userProxy = new Proxy(user, {
  get(target, prop) {
    console.log(`Reading ${prop}`);
    return target[prop];
  },
  set(target, prop, value) {
    console.log(`Changing ${prop} → ${value}`);
    target[prop] = value;
    return true;
  },
});

userProxy.name;
userProxy.age = 31;
