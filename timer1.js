const beeps = process.argv.slice(2);
const timer1 = function(setOfAlarms) {
  setOfAlarms.forEach((timer) => {
    if (!Number.isNaN(parseInt(timer)) && parseInt(timer) > 0) {
      setTimeout(() => {
        // console.log(`this will beep in ${timer} seconds`);
        process.stdout.write("\x07");
      }, Number(timer) * 1000);
    }
  });
};
timer1(beeps);

// const timer1 = function(setOfAlarms) {
//   setOfAlarms.forEach((timer) => {
//     setTimeout(() => {
//       console.log(`this will beep in ${timer} seconds`);
//       process.stdout.write("\x07");
//     }, Number(timer) * 1000);
//   });
// };
// timer1(beeps);
