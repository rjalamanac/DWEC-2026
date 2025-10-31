class Light {
  on() {
    console.log("💡 Light ON");
  }
  off() {
    console.log("💡 Light OFF");
  }
}
class LightOnCommand {
  constructor(light) {
    this.light = light;
  }
  execute() {
    this.light.on();
  }
}
class Remote {
  submit(command) {
    command.execute();
  }
}

const light = new Light();
const onCommand = new LightOnCommand(light);
const remote = new Remote();
remote.submit(onCommand);
