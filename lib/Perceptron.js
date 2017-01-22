'use strict'

module.exports = class Perceptron {
      /**
       * Init Perceptron
       * it will generate random number weights for inputs
       *
       * @param   n   Number of inputs
       *
       **/
      constructor (n) {
        this.weights = [];
        this.learningConstant = 0.01;
        for(let i = 0; i < n; i++) {
            this.weights.push(Math.random() * 2 - 1);
        }
      }
      /**
       * Feed perceptron with input data
       *
       * @param   inputs    Arroy of data , n elem will be processed
       *
       * @return    activation
       **/
      feedforward(inputs) {
          let sum = 0;
          for(let i = 0; i < this.weights.length; i++ ) {
            sum += inputs[i] * this.weights[i];
          }
          return this.activation(sum); // here the perceptron is making a guess. Below or above the line
      }
      /**
       * Preceptron activation function, if it is 1, it's ok
       *
       * @param   sum   Inputs sum
       *
       * @return  negativ or positiv one
       */
      activation(sum) {
        if (sum > 0) return 1;
        else return -1;
      }
      /**
       * Train the perceptron
       *
       * @param   inputs    Array of data
       * @param   desired   Expected result
       * @param   iteration  Number of training iteration
       */
       train(inputs, desired, iteration) {
         let numberOfIteration = iteration || 1;
         for(let j = 0; j < numberOfIteration; j++ ) {
           let guess = this.feedforward(inputs);
           let error = desired - guess;
           for(let i = 0; i < this.weights.length; i++) {
             this.weights[i] += this.learningConstant * error * inputs[i];
           }
         }
       }
}
