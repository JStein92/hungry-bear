import { HungryBear } from './../js/hungrybear.js';


export class BearManager {

  constructor (allBears){
    this.allBears = [];
    this.totalMilk = 0;
  }

  getTotalMilk(){
    this.totalMilk= 0;
    for (var i = 0; i < this.allBears.length; i++) {
      this.totalMilk += this.allBears[i].milk;
    }
    return this.totalMilk;
  }

}
