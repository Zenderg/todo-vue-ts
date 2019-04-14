export default class State {
  public tasks: {id: number, text: string}[];

  constructor() {
    this.tasks = [];
  }
}
