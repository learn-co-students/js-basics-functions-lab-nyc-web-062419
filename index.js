// Code your solution in this file!
function distanceFromHqInBlocks(num){
  let hq = 42;
  if (num > 42) {
    return num - hq;
  } else {
    return hq - num;
  }
}

function distanceFromHqInFeet(num){
 return distanceFromHqInBlocks(num) * 264;  
}

function distanceTravelledInFeet(numOne, numTwo) {
  if (numOne > numTwo) {
    return (numOne - numTwo) * 264;
  } else {
    return (numTwo - numOne) * 264;
  }
}

function calculatesFarePrice(numOne, numTwo) {

  const dist = distanceTravelledInFeet(numOne, numTwo);
  if (dist <= 400){
    return 0;
  } else if (dist < 2000) {
    return (dist - 400) * .02;
  } else if (dist <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}