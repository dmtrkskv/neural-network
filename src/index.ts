import { Network } from "./Network";
import { testNetwork } from "./utils";

const network = new Network([2, 4, 1]);

const dataSets = [
  { inputs: [1, 1], outputs: [0] },
  { inputs: [0, 0], outputs: [0] },
  { inputs: [1, 0], outputs: [1] },
  { inputs: [0, 1], outputs: [1] }
];

const learningOptions = {
  learningRate: 0.7,
  epochsNumber: 5000
};

const testOptions = {
  allowableError: 0.05,
  iterationsNumber: 100
};

testNetwork(network, dataSets, learningOptions, testOptions);
