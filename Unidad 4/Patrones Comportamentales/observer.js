class Subject {
  constructor() {
    this.observers = [];
  }
  subscribe(fn) {
    this.observers.push(fn);
  }
  notify(data) {
    this.observers.forEach((fn) => fn(data));
  }
}

const news = new Subject();
news.subscribe((data) => console.log("Subscriber 1:", data));
news.subscribe((data) => console.log("Subscriber 2:", data));
news.notify("📰 New article published");
