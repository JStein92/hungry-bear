import { HungryBear } from './../js/hungrybear.js';
import { BearManager } from './../js/bearManager.js';
describe('HungryBear', function() {
  let fuzzy = new HungryBear("Fuzzy");
  let bearManager = new BearManager();
  beforeEach(function() {
    jasmine.clock().install();
    fuzzy.setHunger();


  });
    bearManager.allBears.push(fuzzy);
  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function() {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
  });


  it('should have a food level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(fuzzy.foodLevel).toEqual(7);
  });

  it('should get very hungry if the food level drops below zero', function() {
    fuzzy.foodLevel = 0;
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should get very hungry if 10 seconds pass without feeding', function() {
    jasmine.clock().tick(10001);
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should have a food level of ten if it is fed', function() {
    jasmine.clock().tick(9001);
    fuzzy.feed();
    expect(fuzzy.foodLevel).toEqual(10);
  });

  it ('should produce milk', function(){
      fuzzy.produce();
      jasmine.clock().tick(3001);
      expect(fuzzy.milk).toEqual(10);
  });

  it ('should get total milk', function(){
    expect(bearManager.getTotalMilk()).toEqual(10);
  });

  it ('should increase bear stomach capacity',function(){
    bearManager.upgradeStomach();
    fuzzy.feed();
    expect(fuzzy.foodLevel).toEqual(15);
  });

});
