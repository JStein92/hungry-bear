let id = 1;
export class HungryBear {


    constructor(name) {
      this.id = id;
      id ++;
      this.name = name;
      this.foodLevelMax = 10;
      this.foodLevel = 10;
      this.milk = 0;
    }

    setHunger() {
      setInterval(() => {
        this.foodLevel--;
      }, 1000);
    }

    didYouGetEaten() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  feed() {
    this.foodLevel = this.foodLevelMax;
  }

  produce() {
    setInterval(() => {
      this.milk +=10;
    }, 3000);
  }


}
