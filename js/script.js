function distribution(ratios, totalPortion){
  if (arguments.length != 2){
    console.log("Please make sure two arguments are entered.");
    return;
  } else if (typeof ratios != "object" || Array.isArray(ratios) || ratios == null) {
    console.log("Please double check your ratios input.");
    return;
  } else if (totalPortion < 0 || totalPortion % 1 != 0) {
    console.log("Please make sure the total portion value is a positive integer.");
    return;
  }

  var finalDistro = {};
  var remainders = {};

  var foodItemCount = Object.keys(ratios).length; //amount of food items
  var foodId = Object.keys(ratios); //food ids store in an array in ascending order
  var denominator = 0;

  for (var i = 0; i < foodItemCount; i++){
    denominator += ratios[foodId[i]];
  }

  if (denominator <= 0) {
    console.log(finalDistro);
    return finalDistro;
  }

  var largestRemainder = denominator/totalPortion;
  var allocatedPortion = 0;

  // allocate automatic portion
  for (var i = 0; i < foodItemCount; i++){
    var id = foodId[i]; // id of current food item
    var autoPortion = ratios[id]/largestRemainder;
    finalDistro[id] = Math.floor(autoPortion);
    remainders[id] = autoPortion - finalDistro[id];
    allocatedPortion += finalDistro[id];
  }

  var remainderPortion = totalPortion - allocatedPortion;

  // allocate leftover portions
  for (var i = 0; i < remainderPortion; i++){
    var max = 0;
    var maxIndex = 0;
    for (var j = 0; j < foodItemCount; j++){
      var id = foodId[j]; // id of current food item
      if (remainders[id] > max){ // if no largest remainder, bigger id would not overwrite smaller id
        max = remainders[id];
        maxIndex = id;
      }
    }
    finalDistro[maxIndex] += 1;
    remainders[maxIndex] = 0;
  }

  console.log(finalDistro);
  return finalDistro;
}

function testCases(){
  distribution(null, 7); //-> Please double check your ratios input.
  distribution(7); //-> Please make sure two arguments are entered.
  distribution([4, 5, 3], -3); //-> Please double check your ratios input.
  distribution(["a", "d", 2], 7); //-> Please double check your ratios input.
  distribution({1: 0, 2: 0, 3: 4}, 9.6); //-> Please make sure the total portion value is a positive integer.
  distribution("string", 7); //-> Please double check your ratios input.
  distribution({1: 1}, "string"); //-> Please make sure the total portion value is a positive integer.
  distribution({}, -1); //-> Please make sure the total portion value is a positive integer.

  distribution({}, 1); //-> {}
  distribution({1: 1}, 2); //-> {1: 2}
  distribution({1: 1}, 0); //-> {1: 0}
  distribution({1: 1, 2: 1, 3: 1}, 11); //-> {1: 4, 2: 4, 3: 3}
  distribution({1: 0, 2: 0, 3: 4}, 7); //-> {1: 0, 2: 0, 3: 7}
  distribution({1: 0, 2: 0, 3: 4}, 3); //-> {1: 0, 2: 0, 3: 3}
  distribution({1: 4, 2: 9, 3: 1, 8: 7}, 5); //-> {1: 1, 2: 2, 3: 0, 8: 2}
  distribution({3: 4, 1: 9, 7: 1}, 14); //-> {1: 9, 3: 4, 7: 1}
  distribution({3: 4, 1: 9, 7: 1}, 5); //-> {1: 3, 3: 2, 7: 0}
  distribution({3: 4, 1: 9, 7: 1}, 75); //-> {1: 48, 3: 22, 7: 5}
}
