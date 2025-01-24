const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController.js"); 

// Route : Créer un utilisateur
router.post("/", userController.createUser);

// Route : Récupérer tous les utilisateurs
router.get("/", userController.getUsers);

// Route : Récupérer un utilisateur par ID
router.get("/:id", userController.getUserById);

// Route : Mettre à jour un utilisateur
router.put("/:id", userController.updateUser);

// Route : Supprimer un utilisateur
router.delete("/:id", userController.deleteUser);

module.exports = router;
