const express = require("express");
const router = express.Router();

const userController=require("../controller/users.controller");

router.post("/users", userController.createUser);
router.post("/login", userController.loginIn);
router.get("/users", userController.obtenerDatos);

module.exports= router;