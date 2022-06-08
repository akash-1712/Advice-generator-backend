const express = require("express");
const router = express.Router();
const advice = require("../controllers/fetch");

router.get("/advice", advice.adviceGenerator);

module.exports = router;
