import { ILayer, Layer } from "./Layer";

export interface INetwork {
  outputs: number[];
  activate(inputs: number[]): void;
  train(dataSet: TTrainingExample[], learningRate: number, epochsNumber: number): void;
  reinitializeWeights(): void;
}

export type TTrainingExample = {
  inputs: number[];
  outputs: number[];
}

export class Network implements INetwork {
  private layers: ILayer[] = [];

  private inputsNumber: number;

  constructor(layersSizes: number[]) {
    if (layersSizes.length < 3) {
      throw new Error("Количество слоев сети не может быть меньше 3-х");
    }

    this.inputsNumber = layersSizes[0];

    for (let i = 1; i < layersSizes.length; i++) {
      const previousLayerSize = layersSizes[i - 1];
      const currentLayerSize = layersSizes[i];

      this.layers.push(new Layer(currentLayerSize, previousLayerSize));
    }
  }

  private get outputLayer() {
    return this.layers[this.layers.length - 1];
  }

  public get outputs(): number[] {
    return this.outputLayer.outputs;
  }

  public train(
    dataSet: TTrainingExample[],
    learningRate: number,
    epochsNumber: number
  ): void {
    for (let i = 0; i < epochsNumber; i++) {
      dataSet.forEach(trainingExample => {
        this.activate(trainingExample.inputs);
        this.propogate(trainingExample.outputs, learningRate);
      });
    }
  }

  public activate(networkInputs: number[]) {
    if (networkInputs.length !== this.inputsNumber) {
      throw new Error(
        "Количество входов в сеть не соответствует входным данным"
      );
    }

    this.layers[0].activate(networkInputs);

    for (let i = 1; i < this.layers.length; i++) {
      const previousLayerOutputs = this.layers[i - 1].outputs;

      this.layers[i].activate(previousLayerOutputs);
    }
  }

  private propogate(targetValues: number[], learningRate: number) {
    if (this.outputLayer.size !== targetValues.length) {
      throw new Error(
        "Количество выходов из сети не соответствует обучающим данным"
      );
    }

    this.updateDeltas(targetValues);

    this.layers.forEach(layer => {
      layer.updateWeights(learningRate);
    });
  }

  private updateDeltas(targetValues: number[]) {
    const errorsGradient = targetValues.map(
      (targetValue, index) => this.outputs[index] - targetValue
    );

    this.outputLayer.updateDeltas(errorsGradient);

    // начиная с предпоследнего слоя
    for (let i = this.layers.length - 2; i >= 0; i--) {
      const currentLayer = this.layers[i];
      const nextLayer = this.layers[i + 1];

      const gradientsForNeurons: number[] = nextLayer.getGradientsForPreviousLayer(
        currentLayer.size
      );

      currentLayer.updateDeltas(gradientsForNeurons);
    }
  }

  public reinitializeWeights(): void {
    this.layers.forEach(layer => {
      layer.reinitializeWeights();
    });
  }

  public getLayer(index: number): ILayer {
    return this.layers[index];
  }
}
