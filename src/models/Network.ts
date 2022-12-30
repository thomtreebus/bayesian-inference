import mongoose from "mongoose";
const Schema = mongoose.Schema;
const { CptWithoutParents, CptWithParents } = require("../types");

const NetworkSchema = new mongoose.Schema({
  nodes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Node",
      required: true,
    },
  ],
});

const Network = mongoose.model("Networks", NetworkSchema);

module.exports = Network;
