// Code your solution in this file!
function distanceFromHqInBlocks(n) {
  return Math.abs(42 - n);
}

function distanceFromHqInFeet(n) {
  return distanceFromHqInBlocks(n) * 264;
}
function distanceTravelledInFeet(n1, n2) {
  return Math.abs(n1 - n2) * 264;
}
function calculatesFarePrice(start, dest) {
  if (distanceTravelledInFeet(start, dest) < 400) {
    return 0;
  } else if (
    distanceTravelledInFeet(start, dest) > 400 &&
    distanceTravelledInFeet(start, dest) <= 2000
  ) {
    return (distanceTravelledInFeet(start, dest) - 400) * 0.02;
  } else if (
    distanceTravelledInFeet(start, dest) > 2000 &&
    distanceTravelledInFeet(start, dest) <= 2500
  ) {
    return 25;
  } else if (distanceTravelledInFeet(start, dest) > 2500) {
    return "cannot travel that far";
  }
}
