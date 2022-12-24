const nodeJsonSchema = {
  $schema: "https://json-schema.org/draft/2020-12/schema",
  $id: "https://example.com/node.schema.json",
  title: "Node",
  description: "A node in a Bayesian Network",
  type: "object",
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
};

module.exports = nodeJsonSchema;
