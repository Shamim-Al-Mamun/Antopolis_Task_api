const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const animals = new Schema({
  animal_category: { type: Object, required: true },
  animal_name: { type: String, required: true },
  animal_image: { type: String, required: true },
},
{ timestamps: true }
);

module.exports = mongoose.model("animals", animals);