import { HungryBear } from './../js/hungrybear.js';


export class BearManager {

  constructor (allBears){
    this.allBears = [];
    this.totalMilk = 0;
  }

  getTotalMilk(){

    this.totalMilk += this.allBears.length;
    return this.totalMilk;
  }

  returnTotalMilk(){
    return this.totalMilk;
  }

  upgradeStomach() {
    if (this.totalMilk >= 100)
    {
      for (var i = 0; i < this.allBears.length; i++) {
        this.allBears[i].foodLevelMax += 5;
      }
      this.totalMilk-=100;
    }
  }



  feedAll() {
    for (var i = 0; i < this.allBears.length; i++) {
      this.allBears[i].feed();
    }
  }

}
