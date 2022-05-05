export default class Messager {
  messages: number[] = [];
  constructor() {
  }

  onMessage() {
    const _this = this
    setInterval(()=>{
      _this.messages.push(1);
      console.log(_this.messages);
    }, 3000)
  }

  sendMessage() {
    this.messages.push(2);
    console.log(this, this.messages);
  }

}