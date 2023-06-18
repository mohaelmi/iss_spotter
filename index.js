const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = (passTimes) => {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    console.log(`Next pass at ${datetime} for ${pass.duration} seconds!`);
  }

};


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log("error: ", error);
    return;
  }
  printPassTimes(passTimes);
});





