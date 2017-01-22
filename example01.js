// Single layer feedforward neural network
'use strict'
var Perceptron = require('./lib/Perceptron')
var Trainer = require('./lib/Trainer')

let perceptron = new Perceptron(3);
let train_iteration = 10000;
let training_set_input = [[0, 0, 1], [1, 1, 1], [1, 0, 1], [0, 1, 1]];
let training_set_output = [0, 1, 1, 0];


console.log(perceptron.weights);

for(let i = 0; i < training_set_input.length; i++) {
  perceptron.train(training_set_input[i], training_set_output[i], train_iteration);
}
console.log("New data [1, 0, 0] => ?: ", perceptron.feedforward([1, 0, 0]));

 console.log(perceptron.weights);
