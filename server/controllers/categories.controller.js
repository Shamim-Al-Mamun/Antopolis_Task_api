const Catagory = require("../models/categories.model");

exports.postAnimalCatagory = async (req, res) => {
  try {
    const { category_name } = req.body;

    console.log(category_name);

    // Check if category name is empty
    if (!category_name) {
      return res.status(400).json({ Message: "Category name cannot be empty!" });
    }

    // Check if category with the same name already exists
    const existingCategory = await Catagory.findOne({ category_name });

    if (existingCategory) {
      // If category with the same name exists, send an error message
      return res.status(400).json({ Message: "Category with the same name already exists!" });
    }

    // If category with the same name doesn't exist, create and save the new category
    const catagory = await new Catagory(req.body).save();
    res.status(200).json({
      Message: "Animal category was inserted successfully!",
      catagory,
    });
  } catch (err) {
    res.status(500).json({
      Message: "There was a server side error!",
      Error: err,
    });
  }
};

exports.getAnimalCatagories = async (req, res) => {
  try {
    const catagories = await Catagory.find();
    res.status(200).json({
      Message: "Animal categories were retrieved successfully!",
      catagories,
    });
  } catch (err) {
    res.status(500).json({
      Message: "There was a server side error!",
      Error: err,
    });
  }
};