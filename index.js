// Code your solution in this file!
function distanceFromHqInBlocks(hq) {
  return hq < 42 ? 42 - hq : hq - 42;
}

function distanceFromHqInFeet(hq) {
  return distanceFromHqInBlocks(hq) * 264;
}

function distanceTravelledInFeet(from, to) {
  let distance;
  distance = to > from ? to - from : from - to;
  return distance * 264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (400 < distance && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
