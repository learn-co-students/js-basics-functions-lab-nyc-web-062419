// Code your solution in this file!

function distanceFromHqInBlocks(distance){
    if (distance < 42){
        return 42 - distance
    } else if (distance > 42){
        return distance - 42
    } else if (distance == 42){
        return 1
    }
}


function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance) * 264
}



function distanceTravelledInFeet(start, finish){
    return Math.abs(start - finish) * 264
}

function calculatesFarePrice (start, finish) {
    const dist = distanceTravelledInFeet (start, finish);
   if (dist <= 400) {
       return 0
   } else if (dist > 400 && dist <= 2000) {
       return(dist - 400) * .02  
   } else if (dist > 2000 && dist <= 2500) {
       return 25
   } else {
       return 'cannot travel that far'
   }
}







