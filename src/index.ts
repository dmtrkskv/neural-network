import { Network } from "./Network";

const network = new Network([2, 3, 1]);
network.activate([1, 0]);

console.log(network.outputs);

network.propogate([1], .1);

