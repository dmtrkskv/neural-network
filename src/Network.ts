import { ILayer, Layer } from "./Layer";

export interface INetwork {
  outputs: number[];
  activate(inputs: number[]): void;
  train(dataSets: IDataSet[], learningRate: number, epochsNumber: number): void;
}

interface IDataSet {
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

    /**
     * Фактически первый слой не является слоем.
     */
    for (let i = 1; i < layersSizes.length; i++) {
      const previousLayerSize = layersSizes[i - 1];
      const currentLayerSize = layersSizes[i];

      this.layers.push(new Layer(currentLayerSize, previousLayerSize));
    }
  }

  public activate(networkInputs: number[]) {
    if (networkInputs.length !== this.inputsNumber) {
      throw new Error("Количество входов в сеть не соответствует входным данным");
    }    

    this.layers[0].activate(networkInputs);    

    for (let i = 1; i < this.layers.length; i++) {
      const previousLayerOutputs = this.layers[i - 1].outputs;

      this.layers[i].activate(previousLayerOutputs);
    }
  }  

  public train(dataSets: IDataSet[], learningRate: number, epochsNumber: number): void {
    for (let i = 0; i < epochsNumber; i++) {
      dataSets.forEach(dataSet => {
        this.activate(dataSet.inputs);
        this.propogate(dataSet.outputs, learningRate);
      });
    }
  }

  public getLayer(index: number) : ILayer {
    return this.layers[index];
  }

  public get outputs(): number[] {
    return this.outputLayer.outputs;
  }

  private propogate(targetValues: number[], learningRate: number) {    
    if (this.outputLayer.size !== targetValues.length) {
      throw new Error("Количество выходов из сети не соответствует обучающим данным");
    }

    const errors = targetValues.map((targetValue, index) => this.outputs[index] - targetValue);
    this.outputLayer.updateDeltas(errors);

    for (let i = this.layers.length - 2; i >= 0; i--) {
      const currentLayer = this.layers[i];
      const nextLayer = this.layers[i + 1];

      const gradientsForNeurons: number[] = nextLayer.getGradientsForPreviousLayer(currentLayer.size);  
     
      currentLayer.updateDeltas(gradientsForNeurons);
    }

    this.layers.forEach(layer => {
      layer.updateWeights(learningRate);
    })
  }

  private get outputLayer() {
    return this.layers[this.layers.length - 1];
  }
}
