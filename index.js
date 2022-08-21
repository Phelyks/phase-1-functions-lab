const hq = 42;
function distanceFromHqInBlocks(distance){
   if (distance <42 ){
       return hq-distance
   } else {
       return distance - hq
   }
}

function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) *264
    if ( distance < 42)
    returns (hq-distance)*264
    else {
        return (distance - hq)*264
    }
}

function distanceTravelledInFeet(start, destination){
    if(start < destination){
      return (destination - start)*264
    } else {
      return (start - destination)*264
    }
  }

  function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination)
    if(distance <= 400){
      return 0
    } else if (distance > 401 && distance <= 2000){
      return 2.56
    } else if (distance > 2000 && distance < 2500) {
      return 25
    } else {
      return 'cannot travel that far'
    }
  } // Code your solution in this file!
