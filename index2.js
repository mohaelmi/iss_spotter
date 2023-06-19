const { nextISSTimesForMyLocation } = require("./iss_promised")

const printPassTimes = (passTimeArray) => {
  for (const pass of passTimeArray) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    console.log(`Next pass at ${datetime} for ${pass.duration} seconds!`);
  }
}

nextISSTimesForMyLocation()
  .then((passTimes) => printPassTimes(passTimes))
  .catch((error) => console.log("did not work: ", error.message))
