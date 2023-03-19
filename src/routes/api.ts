const express = require("express");
const router = express.Router();
const { createNetwork, inference } = require("../controllers/api");

router.post("/api/create", createNetwork);
router.get("/api/inference", inference);

module.exports = router;
