export interface INeuron {
    output: number;
  
    activate(inputs: number[]): void;
    updateDelta(gradient: number): void;
    updateWeights(learningRate: number): void;
    getGradientByInputIndex(index: number) : number;
  }

 const squash = {
    SIGMOID(x: number, isDerivate?: boolean): number {
      const fx = 1 / (1 + Math.exp(-x));
      return isDerivate ? fx * (1 - fx) : fx;
    }
  };
  
  export class Neuron implements INeuron {
    public output: number = 0;

    private savedInputs: number[] = [];

    private weights: number[] = [];
    private biasWeight: number = 0;
    private sum: number = 0;

    private delta: number = 0;
  
    constructor(inputsNumber: number) {
      this.initializeWeights(inputsNumber);
    }
  
    public activate(inputs: number[]): void {
      this.savedInputs = inputs;

      this.summarize(inputs);
      this.output = squash.SIGMOID(this.sum);
    }   
    
    public updateDelta(gradient: number) : void {
      this.delta = squash.SIGMOID(this.sum, true) * gradient;
    }

    public updateWeights(learningRate: number): void {
      this.weights = this.weights.map((weight, index) => {
        return weight - learningRate * this.delta * this.savedInputs[index];
      });
    }

    public getGradientByInputIndex(index: number) : number {
      if (index >= this.weights.length) {
        throw new Error("Попытка обратиться к несуществующей связи");
      }

      return this.delta * this.weights[index];
    }  
  
    private summarize(inputs: number[]): void {
      if (this.weights.length !== inputs.length) {
        throw new Error(
          "Число входов в нейрон не соответствует количеству его весов"
        );
      }

      this.sum = inputs.reduce((accum, input, index): number => {
        return accum + input * this.weights[index];
      }, this.biasWeight)
    }
  
    private initializeWeights(weightsNumber: number) {   
      this.weights = [];

      for (let i = 0; i < weightsNumber; i++) {
        this.weights[i] = this.randomNumber;
      }

      this.biasWeight = this.randomNumber;
    }    

    private get randomNumber() : number {
      // return -1 + Math.random() * 2;
      return 0;
    }
  }
  