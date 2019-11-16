import { TTrainingExample, INetwork } from "./Network";

type TLearningOptions = {
  learningRate: number;
  epochsNumber: number;
};

type TTestOptions = {
  allowableError: number;
  iterationsNumber: number;
};

export function testNetwork(
  network: INetwork,
  dataSet: TTrainingExample[],
  learningOptions: TLearningOptions,
  testOptions: TTestOptions
) {
  const { learningRate, epochsNumber } = learningOptions;
  const {
    allowableError,
    iterationsNumber: testIterationsNumber
  } = testOptions;

  const startTime = performance.now();

  for (let i = 0; i < testIterationsNumber; i++) {
    network.reinitializeWeights();

    network.train(dataSet, learningRate, epochsNumber);

    dataSet.forEach(trainingExample => {
      network.activate(trainingExample.inputs);

      trainingExample.outputs.forEach((idealOutput, index) => {
        const actualError = Math.abs(idealOutput - network.outputs[index]);

        if (actualError > allowableError) {
          printLearningResults(network, dataSet);
          throw new Error(
            `Возникла ошибка, выше допустимой: ${allowableError}, на ${i}-й итерации`
          );
        }
      });
    });
  }

  const spentTime = Math.round(performance.now() - startTime);

  printLearningResults(network, dataSet);
  console.warn(
    `Тест успешно пройден за ${spentTime}ms с допустимой ошибкой ${allowableError}`
  );
}

function printLearningResults(network: INetwork, dataSet: TTrainingExample[]) {
  dataSet.forEach(trainingExample => {
    network.activate(trainingExample.inputs);
    console.log(
      `${trainingExample.inputs.toString()} -> ${network.outputs.toString()}`
    );
  });
}