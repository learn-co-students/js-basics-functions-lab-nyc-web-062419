// Code your solution in this file!
function distanceFromHqInBlocks(num) {
    if (num < 42) {
        return 42 - num
    } else {
        return num - 42
    }
}

function distanceFromHqInFeet(num) {
    if (num < 42) {
        return (42 - num) * 264 
    } else {
        return (num - 42) * 264
    }
}

function distanceTravelledInFeet(snum, endnum) {
    if (snum < 42) {
        return (snum - endnum) * 264 
    } else {
        return (endnum - snum) * 264
    }
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400) {
        return 0
    } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) / 50
    } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
        return 25
    } else if (distanceTravelledInFeet(start, destination) > 2500){
        return 'cannot travel that far'
    }
}