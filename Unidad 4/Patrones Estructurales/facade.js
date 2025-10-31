class CPU {
  start() {
    console.log("CPU started");
  }
}
class Memory {
  load() {
    console.log("Memory loaded");
  }
}

class Computer {
  start() {
    const cpu = new CPU();
    const mem = new Memory();
    cpu.start();
    mem.load();
    console.log("Operating System booted");
  }
}

const pc = new Computer();
pc.start();
