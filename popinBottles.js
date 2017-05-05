var bottlesPurchased2 = 0;
var bottlesFromRecycling = 0;
var bottlesFromCaps = 0;
var leftOverCaps = 0;
var leftOverBottles = 0;

function calcBottlesBack (bottlesPurchased, bottlesEmpty, bottlesCaps){
  if (bottlesPurchased <= 0 && bottlesEmpty <= 1 && bottlesCaps <= 3){
    leftOverCaps = bottlesCaps;
    leftOverBottles = bottlesEmpty;
    return 0;
  }
  bottlesPurchased2 += bottlesPurchased;
  var bottlesBackFull = bottlesPurchased + Math.floor(bottlesEmpty/2) + Math.floor(bottlesCaps/4);
  var bottlesFullAfter = Math.floor(bottlesBackFull/2) + Math.floor(bottlesBackFull/4);

  // bottlesFromRecycling += Math.floor((bottlesEmpty)/2);

   bottlesFromCaps += Math.floor(bottlesBackFull/4);
   bottlesFromRecycling += Math.floor(bottlesBackFull/2);
  var bottlesEmptyAfter = (bottlesBackFull+bottlesEmpty) % 2;
  var capsBottlesAfter = (bottlesBackFull+bottlesCaps) % 4;

  var returnedBottles = bottlesBackFull + calcBottlesBack(bottlesFullAfter,bottlesEmptyAfter,capsBottlesAfter);
  return returnedBottles;
}

var money = process.argv[2];
console.log(calcBottlesBack(Math.floor(money/2), 0, 0));
console.log("You have purchased ",bottlesPurchased2, " bottles",
  "\n", bottlesFromRecycling, " bottles were from recycling bottles", "\n", bottlesFromCaps,
  " from recycling bottle caps");
console.log("You have ", leftOverCaps, " caps and " ,leftOverBottles, " bottles leftover");
 //  var bottlesBought = Math.floor(investment/2);
 //  var bottlesBack = Math.floor(bottlesBought/2);
 //  // if (bottlesBack >= 0){
 //  //   return 0
 //  // }

 //  var bottlesLeft = bottlesBought%2;
 //  var bottlesBackFromCaps = Math.floor(bottlesBought/4);
 //  var capsLeft = bottlesBought%4;
 // // calcBottlesBack(bottlesLeft*2);




 //  console.log("You bought " + bottlesBought + " bottles");
 //  console.log("You obtained " + bottlesBack + " from recycling bottles");
 //  console.log("You obtained " + bottlesBackFromCaps + " from recycling bottle caps");
 //  console.log("You have " + bottlesLeft + " bottles left");
 //  console.log("You have " + capsLeft + " bottle caps left");