class File {
  constructor(name) {
    this.name = name;
  }
  display() {
    console.log(`📄 ${this.name}`);
  }
}

class Folder {
  constructor(name) {
    this.name = name;
    this.children = [];
  }
  add(child) {
    this.children.push(child);
  }
  display() {
    console.log(`📁 ${this.name}`);
    this.children.forEach((child) => child.display());
  }
}

const folder = new Folder("Documents");
folder.add(new File("cv.pdf"));
folder.add(new File("notes.txt"));
folder.display();
