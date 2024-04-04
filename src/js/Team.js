export const team = [];

export default class Team {
  constructor(item) {
      this.members = new Set();

      team.push(item);
  }
  
  add(item) {
    if (this.members.has(item)) {
      throw new Error('такой персонаж уже существует в команде!');
    } else {
      this.members.add(item);
    }
  }

  addAll(...allItem) {
    allItem.forEach((item) => {
      this.members.add(item);
    });
  }

  toArray() {
    return [...this.members];
  }
}