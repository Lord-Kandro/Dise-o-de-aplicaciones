const express = require("express");
const router = express.Router();
const service = require("../services/UserService");

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

router.get("/getAll", (req, res) => {
  res.send("Getting all Groups");
  // res.send(service.getAll());
});

router.post("/add", (req, res) => {});

router.put("/edit", (req, res) => {});

router.delete("/remove", (req, res) => {});

module.exports = router;
