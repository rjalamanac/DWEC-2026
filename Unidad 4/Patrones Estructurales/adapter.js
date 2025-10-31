class OldAPI {
  request() {
    return "Old data format";
  }
}
class NewAPI {
  getData() {
    return "New data format";
  }
}
class APIAdapter {
  constructor() {
    this.newAPI = new NewAPI();
  }
  request() {
    return this.newAPI.getData();
  }
}

const adapter = new APIAdapter();
console.log("Adapted response:", adapter.request());
