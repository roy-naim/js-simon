
var array = [];
var max = 100;
// FUNCTIONS
function createBombs(array, max) {
  while (array.length <=5 -1) {
    var number = randomNumberInRange(1, max)

    if (!array.includes(number) == true) {
      array.push(number);
    }
  }
  return array;
}

function randomNumberInRange(min, max) {
  if (isNaN(min) || isNaN(max)) {
    console.log("Non sono numeri");
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}


document.getElementById('numbers').textContent = createBombs();
