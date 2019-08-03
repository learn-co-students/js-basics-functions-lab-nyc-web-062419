// Code your solution in this file!

function distanceFromHqInBlocks(n) {
    if (n >= 42) {
        return n - 42 
    }
    else {
        return (0 - 1) * (n - 42)
    }
}

function distanceFromHqInFeet(n) {
    return distanceFromHqInBlocks(n) * 264
}

function distanceTravelledInFeet(x, y) {
    if (x >= y) {
        return (x - y) * 264
    }
    else {
        return (y - x) * 264
    }
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0
    }
    else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
        return 0.02 * (distanceTravelledInFeet(start, destination) - 400)
    }
    else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
        return 25
    }
    else {
        return "cannot travel that far"
    }
}