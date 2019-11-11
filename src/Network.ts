import { ILayer, Layer } from "./Layer";

export interface INetwork {
  activate(inputs: number[]): void;
  propogate(target: number[], learningRate: number): void;
}

export class Network implements INetwork {
  private receptorsNumber: number;
  private layers: ILayer[] = [];

  constructor(layersSizes: number[]) {
    this.receptorsNumber = layersSizes[0];

    for (let i = 1; i < layersSizes.length; i++) {
      const previousLayerSize = layersSizes[i - 1];
      const currentLayerSize = layersSizes[i];

      this.layers.push(new Layer(currentLayerSize, previousLayerSize));
    }
  }

  public activate(networkInputs: number[]) {
    if (networkInputs.length !== this.receptorsNumber) {
      throw new Error("Число входов нейросети должно равняться числу рецепторов");
    }

    let previousLayerOutputs = networkInputs;

    this.layers.forEach(layer => {
      layer.activate(previousLayerOutputs);

      previousLayerOutputs = layer.outputs;
    });
  }

  public propogate(target: number[], learningRate: number) {}

  public get outputs() {
    return this.outputLayer.outputs;
  }

  private get outputLayer() {
    return this.layers[this.layers.length - 1];
  }
}
