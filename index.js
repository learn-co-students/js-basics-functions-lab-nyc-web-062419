// Code your solution in this file!

function distanceFromHqInBlocks (location) {
    return Math.abs(42 - location)
}

function distanceFromHqInFeet (location) {
    return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet (start, end) {
    return Math.abs(start - end) * 264
}

function calculatesFarePrice (start, end) {

    const dist = distanceTravelledInFeet (start, end);
    if (dist <= 400) {
        return 0
    } else if (dist > 400 && dist <= 2000) {
        return .02 * (dist - 400)
    } else if (dist > 2000 && dist <= 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }

}