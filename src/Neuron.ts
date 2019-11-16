export interface INeuron {
  output: number;
  activate(inputs: number[]): void;
  updateDelta(gradient: number): void;
  updateWeights(learningRate: number): void;
  getGradientByInputIndex(index: number): number;
  reinitializeWeights(): void;
}

export type TSquash = (x: number, isDerivate?: boolean) => number;

const squashList = {
  SIGMOID(x: number, isDerivate?: boolean): number {
    const fx = 1 / (1 + Math.exp(-x));
    return isDerivate ? fx * (1 - fx) : fx;
  },
  RELU(x: number, isDerivate?: boolean): number {
    return isDerivate ? (x > 0 ? 1 : 0) : x > 0 ? x : 0;
  },
  TANH(x: number, isDerivate?: boolean) {
    //@ts-ignore
    return isDerivate ? 1 - Math.pow(Math.tanh(x), 2) : Math.tanh(x);
  }
};

function randomDouble(min: number, max: number): number {
  return min + (max - min) * Math.random();
}

export class Neuron implements INeuron {
  public static squashList = squashList;

  private squash: TSquash = squashList.SIGMOID;

  public output: number = 0;

  private savedInputs: number[] = [];

  private weights: number[] = [];
  private biasWeight: number = 0;
  private sum: number = 0;

  private delta: number = 0;

  constructor(inputsNumber: number) {
    this.initializeWeights(inputsNumber);
  }

  private get randomWeight(): number {
    return randomDouble(-1, 1);
  }

  private initializeWeights(weightsNumber: number) {
    this.weights = [];

    for (let i = 0; i < weightsNumber; i++) {
      this.weights[i] = this.randomWeight;
    }

    this.biasWeight = this.randomWeight;
  }

  public activate(inputs: number[]): void {
    this.savedInputs = inputs;

    this.summarize(inputs);
    this.output = this.squash(this.sum);
  }

  private summarize(inputs: number[]): void {
    if (this.weights.length !== inputs.length) {
      throw new Error(
        "Число входов в нейрон не соответствует количеству его весов"
      );
    }

    this.sum = inputs.reduce((accum, input, index): number => {
      return accum + input * this.weights[index];
    }, this.biasWeight);
  }

  public updateDelta(gradient: number): void {
    this.delta = this.squash(this.sum, true) * gradient;
  }

  public updateWeights(learningRate: number): void {
    this.weights = this.weights.map(
      (weight, index) =>
        weight - learningRate * this.delta * this.savedInputs[index]
    );

    this.biasWeight -= learningRate * this.delta;
  }

  public getGradientByInputIndex(index: number): number {
    if (index >= this.weights.length) {
      throw new Error("Попытка обратиться к несуществующей связи");
    }

    return this.delta * this.weights[index];
  }

  public reinitializeWeights(): void {
    this.initializeWeights(this.weights.length);
  }
}
