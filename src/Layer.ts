import { INeuron, Neuron } from "./Neuron";

/**
 * Входной слой - это особенный слой, который и слоем можно не считать.
 * Это рецепторы. 
 */

export interface ILayer {
    neurons: INeuron[];
    outputs: number[];
  
    activate(inputs: number[]): void;
  }

export class Layer implements ILayer {
    public neurons: INeuron[] = [];
  
    constructor(
      neuronsNumber: number,
      eachNeuronInputsNumber: number
    ) {        
      for (let i = 0; i < neuronsNumber; i++) {
        this.neurons[i] = new Neuron(eachNeuronInputsNumber);
      }
    }
  
    public activate(previousLayerOutputs: number[]): void {
      this.neurons.forEach(neuron => {
        neuron.activate(previousLayerOutputs);
      });
    }
  
    public get outputs(): number[] {
      return this.neurons.map(neuron => neuron.output);
    }
  }
  