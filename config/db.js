const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/taskmanager");
    console.log("Connexion à MongoDB réussie");
  } catch (e) {
    console.error("Erreur de connexion à MongoDB: ", e.message);
    process.exit(1);
  }
};

module.exports = connectDB;
