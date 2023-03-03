// // interface NetNode {
// //   name: string;
// //   parents: string[];
// //   cpt: { [key: string]: number };
// // }
// interface NetNode {
//   id: string;
//   parents: string[];
//   cpt: { [key: string]: { [key: string]: number } };
// }

// interface Evidence {
//   [key: string]: string;
// }

// function likelihoodWeighting(
//   query: string,
//   evidence: Evidence,
//   network: NetNode[],
//   numSamples: number
// ): { [key: string]: number } {
//   let weight: number = 1;
//   let counts: { [key: string]: number } = {};

//   for (let i = 0; i < numSamples; i++) {
//     let sample = sampleFromNetwork(network, evidence);
//     let q = sample[query];

//     // Only update counts if the evidence is consistent with the sample
//     let consistent = true;
//     for (let key in evidence) {
//       if (evidence[key] !== sample[key]) {
//         consistent = false;
//         break;
//       }
//     }
//     if (consistent) {
//       counts[q] = (counts[q] || 0) + weight;
//     }

//     // Update weight using likelihood ratio
//     weight *= getWeight(sample, network, evidence);
//   }
//   console.log(counts);
//   // Normalize the counts to get a probability distribution
//   let totalWeight = Object.values(counts).reduce((a, b) => a + b, 0);
//   let distribution: { [key: string]: number } = {};
//   for (let key in counts) {
//     distribution[key] = counts[key] / totalWeight;
//   }

//   return distribution;
// }

// function sampleFromNetwork(network: NetNode[], evidence: Evidence): Evidence {
//   let sample: Evidence = {};

//   for (let node of network) {
//     let parents = node.parents;
//     let stateProbabilities = node.cpt;

//     // Get the values of the parent nodes from the evidence or from previous samples
//     let parentValues: string[] = parents.map(
//       (parent) => sample[parent] || evidence[parent]
//     );
//     console.log(parentValues);
//     // Get the row in the conditional probability table that corresponds to the parent values
//     let key: string = parentValues.join(",");
//     let probabilities = stateProbabilities[key];

//     // Sample a state from the distribution of the node given its parents
//     let cumulativeProb = 0;
//     let rand = Math.random();
//     for (let state in probabilities) {
//       cumulativeProb += probabilities[state];
//       if (rand < cumulativeProb) {
//         sample[node.id] = state;
//         break;
//       }
//     }
//   }

//   return sample;
// }

// function getWeight(
//   sample: Evidence,
//   network: NetNode[],
//   evidence: Evidence
// ): number {
//   let weight: number = 1;

//   for (let node of network) {
//     let parents = node.parents;
//     let stateProbabilities = node.cpt;

//     // Get the values of the parent nodes from the evidence or from previous samples
//     let parentValues: string[] = parents.map(
//       (parent) => sample[parent] || evidence[parent]
//     );

//     // Get the probability of the state of the node given its parents
//     let key: string = parentValues.join(",");
//     let probability = stateProbabilities[key][sample[node.id]];

//     // Update weight using likelihood ratio
//     weight *= probability;
//   }

//   return weight;
// }

// // type Network = NetNode[];
// let network: NetNode[] = [
//   {
//     id: "A",
//     parents: [],
//     cpt: {
//       "": {
//         state1: 0.3,
//         state2: 0.4,
//         state3: 0.3,
//       },
//     },
//   },
//   {
//     id: "B",
//     parents: [],
//     cpt: {
//       "": {
//         state1: 0.2,
//         state2: 0.5,
//         state3: 0.3,
//       },
//     },
//   },
//   {
//     id: "C",
//     parents: ["A", "B"],
//     cpt: {
//       "state1,state1": {
//         state1: 0.9,
//         state2: 0.1,
//         state3: 0.0,
//       },
//       "state1,state2": {
//         state1: 0.7,
//         state2: 0.2,
//         state3: 0.1,
//       },
//       "state1,state3": {
//         state1: 0.4,
//         state2: 0.4,
//         state3: 0.2,
//       },
//       "state2,state1": {
//         state1: 0.6,
//         state2: 0.3,
//         state3: 0.1,
//       },
//       "state2,state2": {
//         state1: 0.3,
//         state2: 0.4,
//         state3: 0.3,
//       },
//       "state2,state3": {
//         state1: 0.1,
//         state2: 0.5,
//         state3: 0.4,
//       },
//       "state3,state1": {
//         state1: 0.1,
//         state2: 0.5,
//         state3: 0.4,
//       },
//       "state3,state2": {
//         state1: 0.2,
//         state2: 0.3,
//         state3: 0.5,
//       },
//       "state3,state3": {
//         state1: 0.3,
//         state2: 0.3,
//         state3: 0.4,
//       },
//     },
//   },
// ];

// let evidence: Evidence = {
//   A: "state1",
// };

// let queryNode = "C";
// let samples = 10000;
// let probabilities = likelihoodWeighting(queryNode, evidence, network, samples);
interface NetNode {
  name: string;
  parents: string[];
  probabilities: { [key: string]: number };
}

interface Evidence {
  [key: string]: string;
}

function likelihoodWeighting(
  queryVariable: string,
  evidence: Evidence,
  network: NetNode[],
  numSamples: number
): { [key: string]: number } {
  const samples: { [key: string]: number } = {};

  for (let i = 0; i < numSamples; i++) {
    let weight = 1;
    const event: { [key: string]: string } = {};

    for (const node of network) {
      if (node.name in evidence) {
        // NetNode is observed
        event[node.name] = evidence[node.name];
        weight *= node.probabilities[evidence[node.name]];
      } else {
        // NetNode is unobserved
        const parents = node.parents.map((parent) => event[parent]);
        const prob = node.probabilities[parents.join(",")];
        const sample = sampleFromDistribution(node.probabilities, parents);
        event[node.name] = sample;
        weight *= prob;
      }
    }

    samples[event[queryVariable]] =
      (samples[event[queryVariable]] || 0) + weight;
  }

  const totalWeight = Object.values(samples).reduce((acc, val) => acc + val, 0);

  return Object.entries(samples).reduce(
    (result, [value, weight]) => ({
      ...result,
      [value]: weight / totalWeight,
    }),
    {}
  );
}

function sampleFromDistribution(
  probabilities: { [key: string]: number },
  parents: string[]
): string {
  // Convert parent values to key for probabilities
  const key = parents.join(",");
  const distribution = probabilities[key];
  const random = Math.random();
  let cumulativeProbability = 0;

  for (const [value, probability] of Object.entries(distribution)) {
    cumulativeProbability += probability;
    if (cumulativeProbability >= random) {
      return value;
    }
  }

  // This should never be reached
  throw new Error("Error sampling from distribution");
}

const network: NetNode[] = [
  {
    name: "Cloudy",
    parents: [],
    probabilities: {
      true: 0.5,
      false: 0.5,
    },
  },
  {
    name: "Sprinkler",
    parents: ["Cloudy"],
    probabilities: {
      "true,true": 0.1,
      "true,false": 0.9,
      "false,true": 0.5,
      "false,false": 0.5,
    },
  },
  {
    name: "Rain",
    parents: ["Cloudy"],
    probabilities: {
      true: 0.8,
      false: 0.2,
    },
  },
  {
    name: "WetGrass",
    parents: ["Sprinkler", "Rain"],
    probabilities: {
      "true,true": 0.99,
      "true,false": 0.9,
      "false,true": 0.9,
      "false,false": 0.0,
    },
  },
];

const evidence: Evidence = {
  Cloudy: "true",
};

const result = likelihoodWeighting("Sprinkler", evidence, network, 10000);

console.log(result);
