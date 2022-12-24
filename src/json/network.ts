const networkJsonSchema = {
  $schema: "https://json-schema.org/draft/2020-12/schema",
  $id: "https://example.com/network.schema.json",
  title: "Network",
  description: "A Bayesian Network",
  type: "object",
  properties: {
    networkId: {
      description: "The unique identifier for a network",
      type: "string",
      nodes: {
        description: "The nodes in the network",
        type: "array",
        items: { $ref: "#/$defs/node" },
      },
    },
  },
  $defs: {
    node: {
      type: "object",
      required: ["nodeId", "states", "cpt"],
      properties: {
        nodeId: {
          description: "The unique identifier for a node",
          type: "string",
          states: {
            description: "The node's states, e.g. true or false",
            type: "array",
            items: {
              type: "string",
            },
          },
          parents: {
            description: "The node's parent nodes",
            type: "array",
            items: {
              type: "string",
            },
          },
          cpt: {
            description: "The conditional probability table for a node",
            type: "array",
            items: {
              type: "array",
              items: {
                type: "string",
              },
            },
          },
        },
      },
    },
  },
};

module.exports = networkJsonSchema;
