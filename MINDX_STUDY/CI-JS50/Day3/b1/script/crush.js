import Person from "./person.js";
class Crush extends Person {
  favorites;
  apperance;
  constructor(name, age, address, favorites, apperance) {
    super(name, age, address);
    this.favorites = favorites;
    this.apperance = apperance;
  }
}
export default Crush;
