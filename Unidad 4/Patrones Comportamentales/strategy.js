class PaymentContext {
  setStrategy(strategy) {
    this.strategy = strategy;
  }
  pay(amount) {
    this.strategy.pay(amount);
  }
}

class PayPal {
  pay(amount) {
    console.log(`Paying ${amount}€ via PayPal`);
  }
}
class CreditCard {
  pay(amount) {
    console.log(`Paying ${amount}€ via Credit Card`);
  }
}

const ctx = new PaymentContext();
ctx.setStrategy(new PayPal());
ctx.pay(100);
ctx.setStrategy(new CreditCard());
ctx.pay(50);
