function distanceFromHqInBlocks(someValue){
  return Math.abs(someValue - 42);
}

function distanceFromHqInFeet(val){
  return distanceFromHqInBlocks(val)*264
}

function distanceTravelledInFeet(val1,val2) {
  return Math.abs(val1 - val2)*264;
}

function calculatesFarePrice(start, destination){
  const distance = distanceTravelledInFeet(start, destination); 
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}