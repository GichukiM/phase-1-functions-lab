// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
  const scuberHq = 42;

  if (pickupLocation >= scuberHq) {
    return pickupLocation - scuberHq;
  } else {
    return scuberHq - pickupLocation;
  }
}

function distanceFromHqInFeet(pickupLocation) {
  const distanceInBlocks = distanceFromHqInBlocks(pickupLocation);
  const distanceInFeetPerBlock = 264;

  return distanceInBlocks * distanceInFeetPerBlock;
}

function distanceTravelledInFeet(start, destination) {
  const distanceTravelledInBlocks = destination - start;
  const destinationBelowDistance = start - destination;
  const distanceInFeetPerBlock = 264;

  if (destination >= start) {
    return distanceTravelledInBlocks * distanceInFeetPerBlock;
  } else {
    return destinationBelowDistance * distanceInFeetPerBlock
  }
}


function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  

  if (distance <= 400) {
    return 0;
  } else if (distance >= 400 && distance <= 2000) {
    const distanceAfterFreeSample = distance - 400;
    const fare = distanceAfterFreeSample * 0.02;

    return fare
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
