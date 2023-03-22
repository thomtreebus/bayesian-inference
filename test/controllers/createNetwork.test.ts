// Import dependencies
const request = require("supertest");
const appTest = require("../../src/app");
const mongoose = require("mongoose");
const NetworkSchema = require("../../src/models/Network");
// Import the API controller
import { createNetwork } from "../../src/utils/network";

// Connect to the test database
beforeAll(async () => {
  await mongoose.connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
  });
  mongoose.set("strictQuery", true);
});

// Disconnect from the test database
afterAll(async () => {
  await mongoose.connection.close();
});

// Define the test suite
describe("API Controller", () => {
  // Define the test case for the POST endpoint
  describe("POST /api/create", () => {
    it("should insert data into the database", async () => {
      // Define the data to be inserted
      const data = {
        RAIN: {
          id: "RAIN",
          states: ["T", "F"],
          parents: [],
          cpt: { T: 0.2, F: 0.8 },
        },
      };

      // Make a POST request to the API endpoint
      const response = await request(appTest)
        .post("/api/create")
        .send(data)
        .set("Accept", "application/json");

      // Check the response status code
      expect(response.statusCode).toBe(200);

      // Check response message
      const message = response.body.message;
      expect(message).toBe("network successfully created");

      // Check response id and created in database
      const id = response.body.networkId;
      const networkFromDB = await NetworkSchema.findById({
        _id: new mongoose.Types.ObjectId(id),
      });

      expect(networkFromDB.nodes[0].id).toBe("RAIN");

      // Check that the data was inserted into the database
      //   const insertedData = await createNetwork.getData(data.email);
      //   expect(insertedData.name).toBe(data.name);
    });

    it("should return a 400 error if the request body is empty", async () => {
      const response = await request(appTest).post("/api/create").send({});
      expect(response.statusCode).toBe(400);
    });

    it("should return a 400 error if the network in the body is invalid", async () => {
      const network = { id: "Not a valid network" };
      const response = await request(appTest).post("/api/create").send(network);
      expect(response.statusCode).toBe(400);
    });
  });
});
