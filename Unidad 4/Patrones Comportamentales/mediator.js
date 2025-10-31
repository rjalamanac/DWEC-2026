class ChatRoom {
  send(user, message) {
    console.log(`${user.name}: ${message}`);
  }
}
class User {
  constructor(name, chatroom) {
    this.name = name;
    this.chatroom = chatroom;
  }
  send(message) {
    this.chatroom.send(this, message);
  }
}

const chat = new ChatRoom();
const rafa = new User("Rafa", chat);
const ana = new User("Ana", chat);

rafa.send("Hi there!");
ana.send("Hello Rafa!");
