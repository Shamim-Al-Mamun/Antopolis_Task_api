const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categories = new Schema({
  category_name: { type: String, required: true },
},
{ timestamps: true }
);

module.exports = mongoose.model("animal_categories", categories);