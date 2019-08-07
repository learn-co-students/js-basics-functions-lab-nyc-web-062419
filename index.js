// Code your solution in this file!
function distanceFromHqInBlocks(location){
    const blocks = Math.abs(location - 42);
    return blocks;
}

function distanceFromHqInFeet(location){
     const feet = distanceFromHqInBlocks(location)*264;
     return feet;
}

function distanceTravelledInFeet(first, second){
    const loc1 = first;
    const loc2 = second;
    return Math.abs(first-second)*264;
}

function calculatesFarePrice(start, destination){
    const feet = Math.abs(distanceTravelledInFeet(start, destination))*264;
    
    if (feet <=400){
        return "0";
    }else if(feet>400 && feet<2000){
        const fare = (feet-400)*.02;
        return fare;
    }else if (feet>2000 && feet<=2500){
        return 25;
    }else{
        return "cannot travel that far";
    }
}