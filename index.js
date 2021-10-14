function distanceFromHqInBlocks(block) {
    if (block >= 42) {
        return block - 42
    } else if (block < 42) {
        return 42 - block
    }
}

function distanceFromHqInFeet(block) {
    let distance = distanceFromHqInBlocks(block)
    return (distance * 264)
}

function distanceTravelledInFeet(start, destination) {
    let feetTraveled = Math.abs(start - destination)
    return (feetTraveled * 264)
}


const calculatesFarePrice = (start, destination) => {
    let ride = distanceTravelledInFeet(start, destination);

    if (ride <= 400) {
        return 0;
    } else if (ride <= 2000) {
        return (ride - 400) * 0.02;
    } else if (ride <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}