const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connexion à MongoDB
connectDB();

// Middleware pour parser le JSON
app.use(express.json());

// Middleware de journalisation global
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Importer les routes
const userRoutes = require("./routes/userRoutes");

app.use("/api/users", userRoutes);

// Middleware de gestion des erreurs (doit être placé après les routes)
app.use((err, req, res, next) => {
  console.error("Erreur détectée :", err.stack);
  res.status(500).json({ message: "Erreur interne du serveur" });
});

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});



