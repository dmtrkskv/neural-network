import { INeuron, Neuron } from "./Neuron";

export interface ILayer {
    neurons: INeuron[];
    outputs: number[];
  
    activate(inputs: number[]): void;
    propogate(childrenDeltas: number): void;
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

    public propogate(childrenDeltas: number) : void {
      this.neurons.forEach(neuron => {
        neuron.calculateDelta(childrenDeltas);
      });
    }

    public calculateChildrenDeltas() {
      
    }
  
    public get outputs(): number[] {
      return this.neurons.map(neuron => neuron.output);
    }
  }

  export class InputLayer extends Layer {
    constructor(neuronsNumber: number) {        
      super(neuronsNumber, 1);
    }
  
    public activate(networkInputs: number[]): void {
      if (networkInputs.length !== this.neurons.length) {
        throw new Error("Число входов в сеть не соответствует формату обучающих данных")
      }
      for (let i = 0; i < networkInputs.length; i++) {
        const input = networkInputs[i];
        
        this.neurons[i].activate([input]);
      }
    }
  }
  