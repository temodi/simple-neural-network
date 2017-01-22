'use strict'

module.exports = class Trainer {

       constructor(x, y, a) {
         this.inputs = [x, y, 1];  // x, y data and Bias
         this.answer = a;
       }
}
