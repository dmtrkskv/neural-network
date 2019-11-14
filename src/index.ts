import { Network } from "./Network";

const network = new Network([2, 2, 1]);

const learningRate = .3;

for (let i = 0; i < 20_000; i++) {
  network.activate([1, 1]);
  network.propogate([0], learningRate); 
  
  network.activate([0, 0]);
  network.propogate([0], learningRate);
  
  network.activate([1, 0]);
  network.propogate([1], learningRate);
  
  network.activate([0, 1]);
  network.propogate([1], learningRate);
}

network.activate([1, 1]);
console.log('1, 1 -> ' + network.outputs);

network.activate([0, 0]);
console.log('0, 0 -> ' + network.outputs);

network.activate([1, 0]);
console.log('1, 0 -> ' + network.outputs);

network.activate([0, 1]);
console.log('0, 1 -> ' + network.outputs);