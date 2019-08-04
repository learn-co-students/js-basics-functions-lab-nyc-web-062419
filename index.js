// Code your solution in this file!

let location;
let blocks;
// HQ is on 42
function distanceFromHqInBlocks(location){
    let hq = 42;
    if (location >= 42) {
        let blocks = location - hq;
        return blocks;
    } else {
        let blocks = hq - location;
        return blocks;
    }
}

let feet;
// 264 feet per block
function distanceFromHqInFeet(location){
    let hq = 42;
    if (location >= 42) {
        let feet = location - hq;
        return feet * 264;
    } else {
        let feet = hq - location;
        return feet * 264;
    }
}

let start;
let destination;
let block = 264;

function distanceTravelledInFeet(start, destination){
    if (start < destination ) {
        let feet = destination - start;
        return feet * 264;
    } else {
        let feet = start - destination;
        return feet * 264;
    }
}

function calculatesFarePrice(start, destination){
    let cost = 0;
    if (start - destination === 1 || destination - start === 1) {
        return cost;
    } else if (start < destination) {
        let distance = destination - start;
        let distanceInFeet = (distance*264)

        if (distanceInFeet > 400 && distanceInFeet < 2000) {
            let cost = distanceInFeet * 0.02
            return cost - 8;
        } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
            let cost = 25;
            return cost;
        } else if (distanceInFeet > 2500) {
            return "cannot travel that far"
        }
    } else if (start > destination) {
        let distance = start - destination;
        let distanceInFeet = (distance*264)    

        if (distanceInFeet > 400 && distanceInFeet < 2000) {
            let cost = distanceInFeet * 0.02;
            let finalCost = cost - 8;
            let final = finalCost.toFixed(2);
            return parseFloat(final);
        } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
            let cost = 25;
            return cost;
        } else if (distanceInFeet > 2500) {
            return "cannot travel that far"
        }
    }
}