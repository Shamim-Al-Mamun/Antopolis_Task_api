const express = require("express");
const router = express.Router();

const {
    getAnimalCatagories,
    postAnimalCatagory,
} = require("../controllers/categories.controller");

router.post("/", postAnimalCatagory);
router.get("/", getAnimalCatagories);

module.exports = router;