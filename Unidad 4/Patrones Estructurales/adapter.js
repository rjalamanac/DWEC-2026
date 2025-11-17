class OldAPI {
  request() {
    return Error("xd");
    return "<note> <to>Tove</to> <from>Jani</from> <heading>Reminder</heading> <body>Don't forget me this weekend!</body> </note>";
  }
}

class NewAPI {
  getData(numElements) {
    const obj = {
      note: {
        to: "Tove",
        from: "Jani",
        heading: "Reminder",
        body: "Don't forget me this weekend!",
      },
    };
    return JSON.stringify(obj);
  }
}
class APIAdapter {
  constructor() {
    this.newAPI = new NewAPI();
  }
  request() {
    const numElmenetos = 40;
    const jsonData = this.newAPI.getData(numElmenetos);
    return this.convertirXML(jsonData);
  }
  convertirXML(jsonData) {
    return "<note> <to>Tove</to> <from>Jani</from> <heading>Reminder</heading> <body>Don't forget me this weekend!</body> </note>";
  }
}

function main() {
  /*
  let oldApi = new OldAPI();
  console.log(oldApi.request());
  */
  let adapater = new APIAdapter();
  console.log(adapater.request());
}

main();
