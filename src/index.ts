import { Network } from "./Network";

const network = new Network([2, 2, 1]);

const dataSets = [
  {inputs: [1, 1], outputs: [0]},
  {inputs: [0, 0], outputs: [0]},
  {inputs: [1, 0], outputs: [1]},
  {inputs: [0, 1], outputs: [1]},
];

const learningRate = .7;
const epochsNumber = 10000;

network.train(dataSets, learningRate, epochsNumber);

dataSets.forEach(dataSet => {
  network.activate(dataSet.inputs);
  console.log(`${dataSet.inputs.toString()} -> ${network.outputs.toString()}`);
});