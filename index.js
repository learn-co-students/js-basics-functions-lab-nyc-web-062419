// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
    let result; 
    if (blocks > 42) {
        result = blocks - 42
    }
    else {
        result = 42 - blocks
    } 
    return result 
}

function distanceFromHqInFeet(blocks) {
    let result; 
    result = distanceFromHqInBlocks(blocks) * 264
    return result 
}

function distanceTravelledInFeet(startBlock, endBlock) {
    let result;
    if (startBlock > endBlock) {
        result = (startBlock - endBlock) * 264
    }
    else {
        result = (endBlock - startBlock) * 264
    }
    return result
}

function calculatesFarePrice(start, destination) {
    let result 
    let distance = distanceTravelledInFeet(start, destination)
    if (distance < 400 && distance > 0) {
        result = 0 
    }
    else if (distance > 2000) {
        if (distance > 2500) {
            result = 'cannot travel that far'
        }
        else {
            result = 25
        }
    }
    else {
        result = (distance - 400) * .02
    }
    return result
}

// function calculatesFarePrice(start, destination) {
//     let result;
    // if ((destination - start) < 400 && (destination - start ) > 0) {
    //     result = 0 
    // }
    // else if ((destination - start) > 2000) {
    //     if ((destination - start) > 2500) {
    //         result = 'Cannot travel that far.'
    //     }
    //     else {
    //         result = 25
    //     }
    // }
    // else {
    //     result = (destination - start) * .02
    // }
//     return result
// }