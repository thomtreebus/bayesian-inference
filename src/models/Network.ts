import mongoose from "mongoose";
const Schema = mongoose.Schema;
const { CptWithoutParents, CptWithParents } = require("../types");

const NetworkSchema = new mongoose.Schema({
  nodes: [
    {
      id: String,
      states: [String],
      parents: [String],
      cpt: CptWithParents | CptWithoutParents,
    },
  ],
});

const Network = mongoose.model("Networks", NetworkSchema);

module.exports = Network;
