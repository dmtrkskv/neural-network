import { Network, IDataSet } from "./Network";

const network = new Network([2, 4, 1]);

const dataSets = [
  {inputs: [1, 1], outputs: [0]},
  {inputs: [0, 0], outputs: [0]},
  {inputs: [1, 0], outputs: [1]},
  {inputs: [0, 1], outputs: [1]},
];

const learningRate = .7;
const epochsNumber = 5000;

test(dataSets, .05, 100);

function test(dataSets: IDataSet[], allowableError: number, iterationsNumber: number) {
  const startTime = performance.now();

  for (let i = 0; i < iterationsNumber; i++) {
    network.reinitializeWeights();

    network.train(dataSets, learningRate, epochsNumber);

    dataSets.forEach(dataSet => {
      network.activate(dataSet.inputs);

      dataSet.outputs.forEach((idealOutput, index) => {
        if (Math.abs(idealOutput - network.outputs[index]) > allowableError) {
          print(dataSets);
         throw new Error(`Возникла ошибка, выше допустимой: ${allowableError}, на ${i}-й итерации`);
        }
      })
    });
  }

  const interval = Math.round(performance.now() - startTime);

  print(dataSets);
  console.warn(`Тест успешно пройден за ${interval}ms с допустимой ошибкой ${allowableError}`);
}

function print(dataSets : IDataSet[]) {
  dataSets.forEach((dataSet) => {
    network.activate(dataSet.inputs);
    console.log(`${dataSet.inputs.toString()} -> ${network.outputs.toString()}`);
  });
}
