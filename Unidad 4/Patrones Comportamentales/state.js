class TrafficLight {
  constructor() {
    this.state = new Red();
  }
  setState(state) {
    this.state = state;
  }
  change() {
    this.state.handle(this);
  }
}

class Red {
  handle(ctx) {
    console.log("🔴 Red → Green");
    ctx.setState(new Green());
  }
}
class Green {
  handle(ctx) {
    console.log("🟢 Green → Yellow");
    ctx.setState(new Yellow());
  }
}
class Yellow {
  handle(ctx) {
    console.log("🟡 Yellow → Red");
    ctx.setState(new Red());
  }
}

const light = new TrafficLight();
light.change();
light.change();
light.change();
