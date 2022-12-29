const mongoose = require("mongooose");
const Schema = mongoose.Schema;
const { Node, CptWithoutParents, CptWithParents } = require("../types");

const NodeSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  states: [
    {
      type: String,
      required: true,
    },
  ],
  parents: [
    {
      type: String,
      required: true,
    },
  ],
  cpt: {
    type: CptWithParents | CptWithoutParents,
    required: true,
  },
});
