import { INeuron, Neuron } from "./Neuron";

export interface ILayer {
    outputs: number[];
    size: number;
  
    activate(inputs: number[]): void;
    updateDeltas(gradientsForNeurons: number[]): void;
    updateWeights(learningRate: number): void;
    getGradientForInputNeuron(inputNeuronIndex: number) : number;
    getGradientsForPreviousLayer(inputNeuronsNumber: number) : number[];
    reinitializeWeights(): void;
  }

/**
 * Слой при прямом и обратном распространении принимает все значения 
 * соседнего слоя и каждый нейрон выбирает нужные значения для себя.
 */

export class Layer implements ILayer {
    protected neurons: INeuron[] = [];
  
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

    public updateDeltas(gradientsForNeurons: number[]) : void {
      this.neurons.forEach((neuron, neuronOutputIndex) => {
        neuron.updateDelta(gradientsForNeurons[neuronOutputIndex]);
      });
    }

    public updateWeights(learningRate: number): void {
      this.neurons.forEach(neuron => neuron.updateWeights(learningRate));
    }
   
    /**
     * Возвращает градиенты для нейронов, влияющих на данный слой в виде массива.
     */
    public getGradientsForPreviousLayer(inputNeuronsNumber: number): number[] {    
      const gradients: number[] = [];

      for (let i = 0; i < inputNeuronsNumber; i++) {
          gradients.push(this.getGradientForInputNeuron(i))
      }

      return gradients;
    }

    /**
     * Предполагается, что у каждого нейрона порядок весов соответствует порядку нейронов в предыдущем слое.
     * В перспективе, в неполносвязной модели, каждый нейрон будет иметь 
     * таблицу индексов входящих в него нейронов.
     */
    public getGradientForInputNeuron(inputNeuronIndex: number) : number {
      return this.neurons.reduce((accum, neuron): number => {
        return accum + neuron.getGradientByInputIndex(inputNeuronIndex);
      }, 0);
    }
  
    public get outputs(): number[] {
      return this.neurons.map(neuron => neuron.output);
    }

    public get size(): number {
      return this.neurons.length;
    }

    public reinitializeWeights() : void {
      this.neurons.forEach(neuron => neuron.reinitializeWeights());
    }
  }