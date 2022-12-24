const { JsonSchema, InvalidSchemaError } = require("@hyperjump/json-schema");
import type { Validator, Result } from "@hyperjump/json-schema";
const { networkSchema } = require("./network");
import simpleNetwork from "../../networks/GrassWet.json";

JsonSchema.add(networkSchema);
// Example: Validate instance
module.exports.test = async function test() {
  try {
    const isNetwork: Validator = await JsonSchema.validate(networkSchema);
    const result: Result = isNetwork(simpleNetwork);
    console.log("isNetwork:", result.valid);
  } catch (error: unknown) {
    console.log(error);
  }
};
// test();

// Example: Specify output format
// const verboseOutput = await JsonSchema.validate(
//   networkSchema,
//   "foo",
//   JsonSchema.VERBOSE
// );

// Example: Specify meta-validation output format
JsonSchema.setMetaOutputFormat(JsonSchema.FLAG);

// Example: Disable meta-validation
JsonSchema.setShouldMetaValidate(false);

module.exports = {};
