// Single layer feedforward neural network
'use strict'
var Perceptron = require('./lib/Perceptron')
var Trainer = require('./lib/Trainer')
const trainerLength = 1000;
const frameSizeWidth = 640;
const frameSizeHeight = 360;

let trainingSet = [];
let perceptron = new Perceptron(3);

// Default line
function f(x) {
  return 2 * x + 1;
}

// Random between two value
function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initializing trainingset array with random numbers
function initTrainingSet() {
  for(let i = 0; i < trainerLength; i++ ) {
      let x = randomRange(-frameSizeWidth / 2 , frameSizeWidth / 2);
      let y = randomRange(-frameSizeHeight / 2 , frameSizeHeight / 2);
      let answer = 1;
      if (y < f(x))
        answer = -1;
      trainingSet.push(new Trainer(x, y, answer));
  }
}

// Train on trainingSet
function letsTrain(jsonResult) {
  console.log(jsonResult?'':'Training has started');
  if (!jsonResult) {
      console.log('Weights before training', perceptron.weights);
  }
  let result = [];
  for(let i = 0; i < trainerLength; i++) {
    perceptron.train(trainingSet[i].inputs, trainingSet[i].answer);
    let guess = perceptron.feedforward(trainingSet[i].inputs);
    if (jsonResult) {
        result.push({ data: trainingSet[i].inputs, guess : guess } );
    } else {
        console.log((guess > 0 ? 'Below':'Above') + ' the line');
    }
  }
  if (jsonResult) {
      console.log(JSON.stringify(result));
  }
  console.log(jsonResult?'':'Training has done');
  if (!jsonResult) {
      console.log('Weights after training', perceptron.weights);
  }
}

initTrainingSet();
letsTrain(false);
