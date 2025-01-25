const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connexion à MongoDB réussie");
  } catch (e) {
    console.error("Erreur de connexion à MongoDB: ", e.message);
    process.exit(1);
  }
};

module.exports = connectDB;
