import { ILayer, Layer, InputLayer, OutputLayer } from "./Layer";

export interface INetwork {
  activate(inputs: number[]): void;
  propogate(target: number[], learningRate: number): void;
}

export class Network implements INetwork {
  private layers: ILayer[] = [];

  constructor(layersSizes: number[]) { 
    this.layers.push(new InputLayer(layersSizes[0]))

    for (let i = 1; i < layersSizes.length; i++) {
      const previousLayerSize = layersSizes[i - 1];
      const currentLayerSize = layersSizes[i];

      const isOutputLayer = layersSizes.length - 1 === i;

      this.layers.push(new (isOutputLayer ? OutputLayer : Layer)(currentLayerSize, previousLayerSize));
    }
  }

  public activate(networkInputs: number[]) {
    this.layers[0].activate(networkInputs);    

    for (let i = 1; i < this.layers.length; i++) {
      const previousLayerOutputs = this.layers[i - 1].outputs;

      this.layers[i].activate(previousLayerOutputs);
    }
  }

  public propogate(targetValues: number[], learningRate: number) {
    const errors = targetValues.map((targetValue, index) => targetValue - this.outputs[index]);
    this.outputLayer.updateDeltas(errors);

    for (let i = this.layers.length - 2; i >= 0; i--) {
      const currentLayer = this.layers[i];
      const nextLayer = this.layers[i + 1];

      const gradientsForNeurons: number[] = nextLayer.getGradientsForInputNeurons(currentLayer.neurons.length);  
    
      currentLayer.updateDeltas(gradientsForNeurons);
    }

    this.layers.forEach(layer => {
      layer.updateWeights(learningRate);
    })
  }

  public getLayer(index: number) : ILayer {
    return this.layers[index];
  }

  public get outputs() {
    return this.outputLayer.outputs;
  }

  private get outputLayer() {
    return this.layers[this.layers.length - 1];
  }
}
