const mongoose = require("mongoose");
require("dotenv").config(); // Charger les variables d'environment

process.env.NODE_ENV = process.env.NODE_ENV || "developpement";

const mongoURI = process.env.NODE_ENV === "production" 
  ? process.env.MONGO_URI_PROD
  : process.env.MONGO_URI_LOCAL;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connexion à MongoDB réussie");
  } catch (e) {
    console.error("Erreur de connexion à MongoDB: ", e.message);
    process.exit(1);
  }
};

module.exports = connectDB;
