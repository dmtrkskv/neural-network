import { ILayer, Layer, InputLayer } from "./Layer";

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

      this.layers.push(new Layer(currentLayerSize, previousLayerSize));
    }
  }

  public activate(networkInputs: number[]) {
    this.layers[0].activate(networkInputs);    

    for (let i = 1; i < this.layers.length; i++) {
      const previousLayerOutputs = this.layers[i - 1].outputs;

      this.layers[i].activate(previousLayerOutputs);
    }
  }

  public propogate(target: number[], learningRate: number) {
    for (let i = this.layers.length - 2; i > 0; i--) {
      const nextLayerDeltasSum = 
      this.layers[i].propogate(this.layers[i + 1].childenDeltas);
    }
  }

  public get outputs() {
    return this.outputLayer.outputs;
  }

  private get outputLayer() {
    return this.layers[this.layers.length - 1];
  }
}
