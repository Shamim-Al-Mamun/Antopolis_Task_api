const express = require("express");
const router = express.Router();

const upload = require("../middlewares/uploads");

const {
    postAnimal,
    getAnimals,
    getCategoryWiseAnimals
} = require("../controllers/animals.controller");

router.post("/", upload.single('animalImage'), postAnimal);
router.get("/", getAnimals);
router.get("/:catID", getCategoryWiseAnimals);

module.exports = router;