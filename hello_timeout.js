// const helloTimeout = function(thing) {
//   console.log('43llo th3r3 w0r1d')
// };

// setTimeout(helloTimeout, 3000);

const thing = ['43llo', 'th3r3', 'w0r1d'];
let i = 0;

const printOneSecond = () => setTimeout(() => {
  console.log(thing[i++]);
  if (i < thing.length) {
    printOneSecond();
  }
}, 1000);

printOneSecond();