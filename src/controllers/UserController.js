const express = require("express");
const router = express.Router();
const UserService = require("../services/UserService")

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

router.get("/getAll", (req, res) => {
  UserService.getAll().then((x)=>{
    res.send(x)
  })
});

router.post("/add", (req, res) => {});

router.put("/edit", (req, res) => {});

router.delete("/remove", (req, res) => {});

module.exports = router;
