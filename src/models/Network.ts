import mongoose from "mongoose";
const { CptWithoutParents, CptWithParents } = require("../types");

const NetworkSchema = new mongoose.Schema({
  nodes: [
    {
      id: String,
      states: [String],
      parents: [String],
      cpt: CptWithParents | CptWithoutParents,
      _id: false,
    },
  ],
});

const Network = mongoose.model("Networks", NetworkSchema);

module.exports = Network;
