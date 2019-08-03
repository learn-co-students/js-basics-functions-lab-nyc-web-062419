// Code your solution in this file!
function distanceFromHqInBlocks (location) {
    let blocks = Math.abs(location - 42)
    return blocks
}

function distanceFromHqInFeet (location){
    let blocks = distanceFromHqInBlocks(location)
    return blocks * 264
}

function distanceTravelledInFeet (start, end){
    let blocks = Math.abs(start - end)
    return blocks * 264
}

function calculatesFarePrice (start, end){
    let feet = distanceTravelledInFeet(start,end)
    feet = feet - 400
    switch (true) {
        case (feet <= 0):
          return 0
        case (feet <= 1600):
            let fare = feet * 0.02
            return fare
        case (feet <= 2100):
            return 25
        case (feet > 2100):
            return 'cannot travel that far'
    }
}