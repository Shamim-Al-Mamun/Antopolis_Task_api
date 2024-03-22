const Animal = require("../models/animals.model");
const path = require('path');

exports.postAnimal = async (req, res) => {
  try {
    const { animal_category, animal_name, animal_image } = req.body;

    console.log(req.file.path);

    // Check if animal name is empty
    if (!animal_name) {
      return res.status(400).json({ Message: "Animal name cannot be empty!" });
    }

    // Check if animal with the same name already exists
    const existingAnimal = await Animal.findOne({ animal_name });

    if (existingAnimal) {
      // If animal with the same name exists, send an error message
      return res.status(400).json({ Message: "Animal with the same name already exists!" });
    }

    // // If category with the same name doesn't exist, create and save the new animal
    const newAnimal = new Animal({
      animal_category: req.body.animal_category,
      animal_name: req.body.animal_name,
      animal_image: path.basename(req.file.path)
    });
    
    await newAnimal.save();
    res.status(201).send('Animal saved successfully!');
  } catch (err) {
    res.status(500).json({
      Message: "There was a server side error!",
      Error: err,
    });
  }
};

exports.getAnimals = async (req, res) => {
  try {
    const animals = await Animal.find();
    res.status(200).json({
      Message: "Animals were retrieved successfully!",
      animals,
    });
  } catch (err) {
    res.status(500).json({
      Message: "There was a server side error!",
      Error: err,
    });
  }
};

exports.getCategoryWiseAnimals = async (req, res) => {
  try {
    const animals = await Animal.find({ animal_category: req.params.catID });
    res.status(200).json({
      Message: "Animals was fetched successfully!",
      animals,
    });
  } catch (err) {
    res.status(500).json({
      Message: "There was a server side error!",
      Error: err,
    });
  }
};