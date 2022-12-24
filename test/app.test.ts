const supertest = require("supertest");
const app = require("../src/app");

describe("GET /ping", () => {
  it("replies with pong", async () => {
    const response = await supertest(app).get("/ping").expect(200);
    expect(response.body.ping).toBe("pong");
  });
});
