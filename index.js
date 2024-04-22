const { concat } = require('lodash');
exports.printMsg = function () {
  const final = concat(1, 2, 3)
  console.log(`This is a message from the demo package`);
  console.log(final, "concat array values");
}
