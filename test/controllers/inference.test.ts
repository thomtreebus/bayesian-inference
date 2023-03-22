// Import dependencies
const request = require("supertest");
const appTest = require("../../src/app");
const mongoose = require("mongoose");
const NetworkSchema = require("../../src/models/Network");

const networkData = {
  RAIN: {
    id: "RAIN",
    states: ["T", "F"],
    parents: [],
    cpt: { T: 0.2, F: 0.8 },
  },
  SPRINKLER: {
    id: "SPRINKLER",
    states: ["T", "F"],
    parents: ["RAIN"],
    cpt: [
      { condition: { RAIN: "T" }, probability: { T: 0.01, F: 0.99 } },
      { condition: { RAIN: "F" }, probability: { T: 0.4, F: 0.6 } },
    ],
  },
  GRASS_WET: {
    id: "GRASS_WET",
    states: ["T", "F"],
    parents: ["RAIN", "SPRINKLER"],
    cpt: [
      {
        condition: { RAIN: "T", SPRINKLER: "T" },
        probability: { T: 0.99, F: 0.01 },
      },
      {
        condition: { RAIN: "T", SPRINKLER: "F" },
        probability: { T: 0.8, F: 0.2 },
      },
      {
        condition: { RAIN: "F", SPRINKLER: "T" },
        probability: { T: 0.9, F: 0.1 },
      },
      {
        condition: { RAIN: "F", SPRINKLER: "F" },
        probability: { T: 0, F: 1 },
      },
    ],
  },
};

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
describe("API POST inference", () => {
  // Define the test case for the POST endpoint
  describe("POST /api/inference", () => {
    it("should perform LW algorithm on given network", async () => {
      // Make a POST request to the API endpoint to create a network
      const createNetResponse = await request(appTest)
        .post("/api/create")
        .send(networkData)
        .set("Accept", "application/json");

      // Check response message
      const message = createNetResponse.body.message;
      expect(message).toBe("network successfully created");

      // Check response id and created in database
      const id = createNetResponse.body.networkId;

      const data = {
        networkId: id,
        algorithm: "LW",
        query: { GRASS_WET: "T" },
        evidence: { RAIN: "T" },
        sampleSize: 1000,
      };

      const response = await request(appTest)
        .post("/api/inference")
        .send(data)
        .set("Accept", "application/json");

      expect(response.statusCode).toBe(200);
      expect(response.body.message).toBe("success!");
      expect(response.body.query).toBe("P(GRASS_WET|RAIN)");
      expect(response.body.probability);
    });

    it("should perform VE algorithm on given network", async () => {
      // Make a POST request to the API endpoint to create a network
      const createNetResponse = await request(appTest)
        .post("/api/create")
        .send(networkData)
        .set("Accept", "application/json");

      // Check response message
      const message = createNetResponse.body.message;
      expect(message).toBe("network successfully created");

      // Check response id and created in database
      const id = createNetResponse.body.networkId;

      const data = {
        networkId: id,
        algorithm: "VE",
        query: { GRASS_WET: "T" },
        evidence: { RAIN: "T" },
      };

      const response = await request(appTest)
        .post("/api/inference")
        .send(data)
        .set("Accept", "application/json");

      expect(response.statusCode).toBe(200);
      expect(response.body.message).toBe("success!");
      expect(response.body.query).toBe("P(GRASS_WET|RAIN)");
      expect(response.body.probability);
    });

    it("should return a 400 error if the request body is empty", async () => {
      const response = await request(appTest).post("/api/inference").send({});
      expect(response.statusCode).toBe(400);
    });

    it("should return a 400 error if the network in the body is invalid", async () => {
      const network = { id: "Not a valid network" };
      const response = await request(appTest).post("/api/create").send(network);
      expect(response.statusCode).toBe(400);
    });
  });
});
