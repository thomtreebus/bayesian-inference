// {
//   "$id": "https://example.com/arrays.schema.json",
//   "$schema": "https://json-schema.org/draft/2020-12/schema",
//   "description": "A representation of a person, company, organization, or place",
//   "type": "object",
//   "properties": {
//     "fruits": {
//       "type": "array",
//       "items": {
//         "type": "string"
//       }
//     },
//     "vegetables": {
//       "type": "array",
//       "items": { "$ref": "#/$defs/veggie" }
//     }
//   },
//   "$defs": {
//     "veggie": {
//       "type": "object",
//       "required": ["veggieName", "veggieLike"],
//       "properties": {
//         "veggieName": {
//           "type": "string",
//           "description": "The name of the vegetable."
//         },
//         "veggieLike": {
//           "type": "boolean",
//           "description": "Do I like this vegetable?"
//         }
//       }
//     }
//   }
// }

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
