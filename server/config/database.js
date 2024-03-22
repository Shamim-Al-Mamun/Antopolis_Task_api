
require("dotenv").config();
const moongoose = require("mongoose");

//MongoBD connection
module.exports = async () => {
  
  try {
    moongoose.connect(`${process.env.MONGO_ATLAS_CONNECTING_STRING}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB is connected Successfully`);
  } catch (err) {
    console.log(err);
  }
};