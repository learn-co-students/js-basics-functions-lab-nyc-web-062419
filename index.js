// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    if (distance > 42) {
        return distance - 42
    }
    else {
        return 42 - distance
    }
}

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264
}

function distanceTravelledInFeet(start, stop) {
    return (Math.max(start, stop) - Math.min(start, stop)) * 264
}

function calculatesFarePrice(start, destination) {

    const dist = distanceTravelledInFeet(start, destination)
    if (dist <= 400) {
        return 0
    }
    else if (dist <= 2000) {
        return (dist - 400) * .02
    }
    else if (dist <= 2500) {
        return 25
    }
    else {
        return 'cannot travel that far'
    }

}