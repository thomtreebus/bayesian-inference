const express = require("express");
const router = express.Router();
const { createNetwork } = require("../controllers/api");

router.post("/api/create", createNetwork);

module.exports = router;
