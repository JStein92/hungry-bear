import { HungryBear } from './../js/hungrybear.js';
import { BearManager } from './../js/bearManager.js';
$(function(){

  let bearManager = new BearManager();

  $('#adopt').submit(function(e){
    e.preventDefault();
    const name = $('#adoptName').val();
    let newBear = new HungryBear(name);

    newBear.setHunger();
    newBear.produce();

    bearManager.allBears.push(newBear);

    $('#bears').append(
    `<div class='newBear'>
      <h3> ${newBear.name} </h3>
        <p id='${newBear.name}'> Food level: <span id = 'bear${newBear.id}'>${newBear.foodLevel}</span> </p>
        <p> Milk produced: <span id='milk${newBear.id}'>  ${newBear.milk} </span> </p>
        <button type = 'button' class = 'btn btn-info' id='${newBear.id}'>Feed me</button>
    </div> `);

    $(`#${newBear.id}`).click(function(){
      newBear.feed();
    });

  });


  setInterval(() => {

      for (var i = 0; i < bearManager.allBears.length; i++) {
        $(`#bear${bearManager.allBears[i].id}`).text(bearManager.allBears[i].foodLevel);
        $(`#milk${bearManager.allBears[i].id}`).text(bearManager.allBears[i].milk);
        $('#totalMilk').text(bearManager.returnTotalMilk());
        if (bearManager.allBears[i].didYouGetEaten()){

          try {
            $('#bearGame').hide();
            $('#loseScreen').show();
            $('#bears').text("");
            bearManager.allBears.length = 0;
            bearManager.totalMilk = 0;
          } catch(error) {
            console.error(`Alert! The game was not able to be reset: ${error.message}`);
          }

        }
    }
  }, 100);

  setInterval(() => {

    $('#totalMilk').text(bearManager.getTotalMilk());

  }, 500;

  $('#upgradeStomach').click(function(){
    bearManager.upgradeStomach();
  });

  $('#playAgain').submit(function(e){
    e.preventDefault();
    $('#bearGame').show();
    $('#loseScreen').hide();
  });


});
